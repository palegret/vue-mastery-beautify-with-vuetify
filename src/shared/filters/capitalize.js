export default function capitalize(value) {
  if (!value) 
    return '';

  value = value.toString()

  const firstChar = value.charAt(0).toUpperCase()
  const otherChars = value.slice(1)

  return `${firstChar}${otherChars}`
}
