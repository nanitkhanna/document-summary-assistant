const multer = require('multer');
const path = require('path');
const config = require('../config/config');
const {responseMessages} = require('../config/responseMessages');

const uploadPath = config.UPLOAD_PATH;
const destinationPath = path.join(__dirname + '../../../' + uploadPath);

const allowedFileTypes = config.ALLOWED_FILE_TYPES.split(',');

// middlerware to uplaod files to desired folder using multer
const uploadFile = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
      const uniqueFilename = `${Date.now()}-${file.originalname}`;
      cb(null, uniqueFilename);
    }
  });

  //Filter file types fo image and pdf only based on env file types
  const fileFilter = (req, file, cb) => {
    if (allowedFileTypes.some((type) => file.mimetype.startsWith(type))) {
      cb(null, true);
    } else {
      cb(new Error(responseMessages.UNSUPPORTED_FILE_TYPE), false);
    }
  };

  const upload = multer({storage, fileFilter}).single('file');

  return (req, res, next) => {
    upload(req, res, (err) => {
      if (err) {
        return next(err);
      }
      next();
    });
  };
};

module.exports = uploadFile;
