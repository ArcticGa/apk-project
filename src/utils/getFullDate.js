import monthArr from './monthsArray'

export const getFullDate = () => {
  const today = new Date()
  const monthNum = today.getMonth()
  const month = monthArr[monthNum]
  const date = today.getDate()
  const year = today.getFullYear()

  return `${date} ${month} ${year}г.`
}
