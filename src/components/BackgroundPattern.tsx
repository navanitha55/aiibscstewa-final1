interface BackgroundPatternProps {
  children: React.ReactNode;
  className?: string;
  overlay?: boolean;
}

// Background pattern removed for a clean white look matching the live site.
// Kept as a passthrough wrapper so existing page layouts continue to work.
const BackgroundPattern = ({ children, className = "" }: BackgroundPatternProps) => {
  return <div className={className}>{children}</div>;
};

export default BackgroundPattern;
