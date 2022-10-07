const arrayToPnpQueryableArgs = (arr: string[]): string => {
  if (!arr || !arr.length) return "";

  return arr.join(", ");
};

const safeDestructure = <T>(obj: T): T => {
  return obj != null ? obj : ({} as T);
};

export { arrayToPnpQueryableArgs, safeDestructure };
