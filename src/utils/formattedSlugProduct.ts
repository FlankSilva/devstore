export function formattedSlugProduct(name: string) {
  return name
    .toLowerCase()
    .replaceAll('%20', ' ')
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}
