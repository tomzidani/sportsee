/**
 * Check if object has empty properties
 *
 * @param {Object} obj
 * @returns {boolean}
 */
export const isEmptyObject = (obj: Object): boolean =>
  Object.values(obj).every((x) => x === null || x === undefined || x === "")
