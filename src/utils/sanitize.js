/**
 * Sanitize a string to prevent XSS attacks.
 * Escapes HTML special characters and strips any HTML tags.
 * @param {string} str - The input string to sanitize
 * @returns {string} The sanitized string safe for DOM insertion
 */
export function sanitizeHTML(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Strip all HTML tags from a string, then escape remaining entities.
 * @param {string} str - The input string
 * @returns {string} Plain text string
 */
export function stripTags(str) {
  if (typeof str !== 'string') return '';
  const stripped = str.replace(/<[^>]*>/g, '');
  return sanitizeHTML(stripped);
}

/**
 * Get a URL query parameter value, sanitized against XSS.
 * @param {string} paramName - The query parameter name
 * @returns {string} The sanitized parameter value, or empty string
 */
export function getSanitizedParam(paramName) {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get(paramName) || '';
  return stripTags(decodeURIComponent(raw));
}
