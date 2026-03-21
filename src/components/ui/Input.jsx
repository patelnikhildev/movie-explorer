export const Input = ({
  placeholder = "Search...",
  type = "text",
  className = ""
}) => {
  return (
    <input
      type={type}
      className={`w-full text-lg px-3 outline-0 rounded-3xl py-2 bg-main dark:bg-main-dark md:bg-surface md:dark:bg-surface-dark ${className}`}
      placeholder={placeholder}
    />
  );
};
