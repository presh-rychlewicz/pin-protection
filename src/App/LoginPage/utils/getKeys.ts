const getKeys = () => [
  KEYS.slice(1, 4),
  KEYS.slice(4, 7),
  KEYS.slice(7, 10),
  KEYS.slice(0, 1),
]

const KEYS = [...new Array(10)].map((_, index) => index)

export default getKeys
