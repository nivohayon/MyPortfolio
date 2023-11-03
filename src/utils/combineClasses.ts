export const combineClasses = (className: string, classes?: string): string => {
  return `${className} ${classes ?? ''}`.trim();
};
