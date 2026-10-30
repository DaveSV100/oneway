// InfiniStart mark: an infinity loop whose right half takes off as a growth arrow.
// The loop follows the text color; the arrow half uses the brand red. `size` is the height.
// eslint-disable-next-line react/prop-types
const Logo = ({ size = 24, className = '' }) => (
  <svg
    className={className}
    width={Math.round((size * 261) / 164)}
    height={size}
    viewBox="77 -12 261 164"
    fill="none"
    strokeWidth="26"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M200,100 C160,48 90,48 90,100 C90,152 160,152 200,100" stroke="currentColor" />
    <path d="M200,100 C240,152 310,152 310,100 C310,90 307,82 302,75" stroke="#E5252A" />
    <path d="M200,100 C215,80 235,62 255,48 L310,8" stroke="#E5252A" />
    <path d="M284,-1 L336,-10 L312,38 Z" fill="#E5252A" stroke="#E5252A" strokeWidth="4" />
  </svg>
);

export default Logo;
