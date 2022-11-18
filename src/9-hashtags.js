export const hashtags = (text) => {
  return text.match(/#[a-z0-9_]+/g)
}
