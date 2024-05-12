const generateRandomDate = () => {
  const today = new Date()
  const currentYear = today.getFullYear()

  const randomDay = Math.floor(Math.random() * 365) + 1

  const randomDate = new Date(`${currentYear}-01-01`)
  randomDate.setDate(randomDate.getDate() + randomDay)

  const year = randomDate.getFullYear()
  let month = randomDate.getMonth() + 1
  month = month < 10 ? `0${month}` : month
  let day = randomDate.getDate()
  day = day < 10 ? `0${day}` : day

  return `${day}-${month}-${year}`
}

module.exports = {
  generateRandomDate
}