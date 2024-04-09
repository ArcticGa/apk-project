import monthArr from './monthsArray'

export const getDate = () => {
  const today = new Date()
  const monthNum = today.getMonth()
  const month = monthArr[monthNum]
  const date = today.getDate()
  const hours = today.getHours()
  let min = today.getMinutes()
  if (min < 10) min = '0' + min

  return `${date} ${month} ${hours}:${min}`
}
