/**
 * The slug of a title: lower-case words of letters and digits joined by hyphens.
 *
 * @param {string} title
 * @returns {string}
 */
export function slugOf(title) {
  return title
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .join("-");
}
