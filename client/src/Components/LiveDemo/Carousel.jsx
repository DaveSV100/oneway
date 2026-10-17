/* eslint-disable react/prop-types */
import { useCallback, useState } from 'react';
import LiveDemo from '.';
import { demoDuration } from './timing';

// Tabs over several live demos; each plays to the end and hands over to the next one.
// `items`: [{ key, label, icon, demo }]. `renderFooter(item)` adds content under the demo.
const DemoCarousel = ({ items, label, renderFooter }) => {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length]);
  const current = items[index];

  return (
    <div className="ai-hero_demo">
      <LiveDemo key={current.key} demo={current.demo} onDone={next}>
        <div className="ai-demo_tabs" role="tablist" aria-label={label}>
          {items.map(({ key, label: tabLabel, icon: Icon }, i) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`ai-demo_tab ${i === index ? 'is-active' : ''}`}
              style={i === index ? { '--ai-tab-duration': `${demoDuration(current.demo)}ms` } : undefined}
              onClick={() => setIndex(i)}
            >
              <Icon />
              {tabLabel}
            </button>
          ))}
        </div>
      </LiveDemo>
      {renderFooter && renderFooter(current)}
    </div>
  );
};

export default DemoCarousel;
