export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-2xl ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
