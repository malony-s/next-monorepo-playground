const UNIT = 8;
export const spacing = (...args: Array<number>): string => {
  return args.map((v) => `${UNIT * v}px`).join(' ');
};
