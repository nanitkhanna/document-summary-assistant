const path = require('path');
const tesseract = require('tesseract.js');
// using fs/promises to get promisified functions
const fs = require('fs/promises');
const pdfParse = require('pdf-parse');

//parsing pdf to get text from the image file
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

//parsing pdf to get text from the pdf file
const pdfParser = async ({filePath}) => {
  let isData = true;
  try {
    const dataBuffer = await fs.readFile(filePath);
    const result = await pdfParse(dataBuffer);
    return {isData, data: result.text};
  } catch (error) {
    isData = false;
    return {isData};
  }
};

module.exports = {
  imageParser,
  pdfParser
};
