import { generateRandomDate } from "./randomDate.js";

const fillProductRating = (clientList, comments) => {
  const rating = {
    star_1: [],
    star_2: [],
    star_3: [],
    star_4: [],
    star_5: []
  }

  const randomNumber = Math.floor(Math.random() * 10) + 1

  for (let i = 0; i < randomNumber; i++) {
    const start = Math.floor(Math.random() * 5) + 1
    const client = {_id: `${start}-${i}`, name: clientList[Math.floor(Math.random() * clientList.length)]}
    const comment = comments[Math.floor(Math.random() * comments.length)]
    const date = generateRandomDate()
    const ratingStar = { client: client, comment: comment, date: date }
    switch (start) {
      case 1:
        rating.star_1.push(ratingStar)
        break
      case 2:
        rating.star_2.push(ratingStar)
        break
      case 3:
        rating.star_3.push(ratingStar)
        break
      case 4:
        rating.star_4.push(ratingStar)
        break
      case 5:
        rating.star_5.push(ratingStar)
        break
      default:
        break
    }
  }

  return rating
}

module.exports = {
  fillProductRating
}