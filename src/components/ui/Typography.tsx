interface ITypography {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  children: React.ReactNode;
  className?: string;
}

const Typography = ({ as, className, children }: ITypography) => {
  const possibleTypographies = {
    h1: (
      <h1
        className={`text-2xl text-primary-800 dark:text-secondary-800 ${className}`}
      >
        {children}
      </h1>
    ),
    h2: (
      <h2
        className={`text-xl text-primary-800 dark:text-secondary-800 ${className}`}
      >
        {children}
      </h2>
    ),
    h3: (
      <h1
        className={`text-lg text-primary-800 dark:text-secondary-800 ${className}`}
      >
        {children}
      </h1>
    ),
    h4: (
      <h2
        className={`text-lg text-primary-800 dark:text-secondary-800 ${className}`}
      >
        {children}
      </h2>
    ),
    h5: (
      <h1
        className={`text-lg text-primary-800 dark:text-secondary-800 ${className}`}
      >
        {children}
      </h1>
    ),
    h6: (
      <h2
        className={`text-lg text-primary-800 dark:text-secondary-800 ${className}`}
      >
        {children}
      </h2>
    ),
    span: (
      <h1
        className={`text-base text-primary-800 dark:text-secondary-800 ${className}`}
      >
        {children}
      </h1>
    ),
    p: (
      <h2
        className={`text-base text-primary-800 dark:text-secondary-800 ${className}`}
      >
        {children}
      </h2>
    ),
  };

  return possibleTypographies[as];
};

export default Typography;
