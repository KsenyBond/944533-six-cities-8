export const adaptData = function (adaptee: any): any {
  return Object.keys(adaptee).reduce((newObj: {[key: string]: any}, key: string) => {
    const value = adaptee[key];
    const newValue = (typeof value === 'object') ? adaptData(value) : value;
    const adaptedKey: string = key
      .split('_')
      .reduce((res, word, i) =>
        i === 0 ? word.toLowerCase() : `${res}${word.charAt(0).toUpperCase()}${word.substring(1).toLowerCase()}`,
      '');
    newObj[adaptedKey] = newValue;
    return newObj;
  }, {});
};

export const convertToPercent = function (rating: number, maxRating: number): number {
  return rating * 100 / maxRating;
};
