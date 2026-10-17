export const STEP_MS = 1900;
export const HOLD_MS = 4200;

// Number of animation steps each kind of demo plays through.
export const stepsFor = (demo) => {
  switch (demo.kind) {
    case 'quote':
      return demo.items.length + 3;
    case 'app':
      return demo.fields.length + 3;
    case 'crm':
      return demo.moves.length;
    case 'cloud':
      return demo.sources.length + 2;
    default:
      return demo.messages.length;
  }
};

// How long one full playback of a demo lasts; used to time the carousel progress bar.
export const demoDuration = (demo) => (stepsFor(demo) - 1) * STEP_MS + HOLD_MS;
