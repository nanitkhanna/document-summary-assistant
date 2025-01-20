const tesseract = require('tesseract.js');

//parsing image to get text from the image file
const imageParser = async ({imagePath}) => {
  let isData = true;
  try {
    const worker = await tesseract.createWorker('eng');
    const result = await worker.recognize(imagePath);
    await worker.terminate();

    return {isData, data: result.data.text};
  } catch (error) {
    isData = false;
    return {isData};
  }
};

module.exports = {
  imageParser
};
