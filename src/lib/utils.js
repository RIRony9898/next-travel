export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")        // spaces to dashes
    .replace(/[^\w\-]+/g, "")    // remove non-word chars
    .replace(/\-\-+/g, "-");     // collapse multiple dashes
}
