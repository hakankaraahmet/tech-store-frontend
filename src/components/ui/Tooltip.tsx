interface ITooltips {
  children: React.ReactNode;
  message: string;
}

const Tooltip = ({ children, message }: ITooltips) => {
  return (
    <div className="group relative flex">
      {children}
      <span
        className={`capitalize max-w-xs min-w-16  absolute top-10 scale-0 transition-all rounded bg-primary-800 border border-secondary-400 p-[2px] text-sm text-secondary-400 group-hover:scale-100`}
      >
        {message}
      </span>
    </div>
  );
};

export default Tooltip;
