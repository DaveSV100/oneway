// InfiniStart mark: an infinity loop whose stroke takes off as a growth arrow.
// The arrow half uses the accent color; the closing loop follows the text color.
// eslint-disable-next-line react/prop-types
const Logo = ({ size = 32, className = '' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    strokeWidth="4.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M24 30C28 35.5 31 38 35.5 38C40.2 38 43 34.5 43 30C43 25.5 40.3 22.2 36.5 22.2" stroke="currentColor" />
    <path
      d="M32.4 10.4L40.4 10L40.35 17M40.4 10C33 16.5 28 24 24 30C20 35.5 17 38 12.5 38C7.8 38 5 34.5 5 30C5 25.5 7.8 22 12.5 22C17 22 20 24.5 24 30"
      stroke="var(--ai-accent)"
    />
  </svg>
);

export default Logo;
