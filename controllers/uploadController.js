const sharp = require('sharp')

const helperImg = (filePath, fileName, size = 500) => {
  return sharp(filePath)
  .resize(size)
  .toFile(`./optimize/${fileName}`)
  .catch(err => console.log(err))
}

const uploadFiles = async (req, res) => {
  const { body, files } = req

  if (!files && files.length === 0) {
    return res.status(400).json({ error: true, message: 'No se recibieron imagenes' })
  }

  const urls = []
  files.forEach(image => {
    helperImg(image.path, `small-${image.filename}`, 250)
    helperImg(image.path, `medium-${image.filename}`, 500)
    helperImg(image.path, `large-${image.filename}`, 1000)

    urls.push({
      original: `${process.env.BASE_URI}/${image.filename}`,
      small: `${process.env.BASE_URI}/small-${image.filename}`,
      medium: `${process.env.BASE_URI}/medium-${image.filename}`,
      large: `${process.env.BASE_URI}/large-${image.filename}`,
    })
  });

  return res.status(200).json({ error: false, data: urls })
}

module.exports = {
  uploadFiles
}