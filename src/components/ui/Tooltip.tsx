interface ITooltips {
  children: React.ReactNode;
  message: string;
  className?: string
}

const Tooltip = ({ children, message, className }: ITooltips) => {
  return (
    <div className="group relative flex">
      {children}
      <span
        className={`${className ? className : "top-10 min-w-16"} capitalize max-w-xs   absolute scale-0 transition-all rounded bg-primary-800 border border-secondary-400 p-1 text-sm text-secondary-400 group-hover:scale-100`}
      >
        {message}
      </span>
    </div>
  );
};

export default Tooltip;
