const httpStatus = require('http-status');
const {summaryService} = require('../services');
const {sendResponse} = require('../lib/sendResponse');
const {responseMessages} = require('../config/responseMessages');
const {deleteFile} = require('../services/files.service');

const generateSummary = async (req, res) => {
  const uploadFile = req.file;
  try {
    if (!uploadFile) {
      return sendResponse(
        res,
        httpStatus.BAD_REQUEST,
        responseMessages.NO_FILES_UPLOADED
      );
    }

    //  retreving type of file by using its mimetype
    const mimeType = uploadFile.mimetype;
    let success, textResult;

    //If incoming file is image then image controller
    if (mimeType.startsWith('image/')) {
      const {isData, data} = await summaryService.imageParser({
        imagePath: uploadFile.path
      });

      success = isData;
      textResult = data;
    } 
    // if format is other the image or pdf 
    else {
      deleteFile({filepath: uploadFile.path});
      return sendResponse(
        res,
        httpStatus.UNSUPPORTED_MEDIA_TYPE,
        responseMessages.UNSUPPORTED_FILE_TYPE
      );
    }

    if (!success || !textResult) {
      deleteFile({filepath: uploadFile.path});
      return res
        .status(411)
        .json({message: responseMessages.UNSUPPORTED_FILE_TYPE});
    }

    deleteFile({filepath: uploadFile.path});

    console.log(textResult,success)
  } catch (error) {  const {length} = req.query;

    deleteFile({filepath: uploadFile.path});
    return sendResponse(
      res,
      httpStatus.INTERNAL_SERVER_ERROR,
      responseMessages.INTERNAL_SERVER_ERROR
    );
  }
};
module.exports = {
  generateSummary
};
