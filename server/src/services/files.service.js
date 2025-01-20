const fs = require('fs/promises');

//deleting files
const deleteFile = async ({filepath}) => {
  try {
    await fs.unlink(filepath);
    return true;
  } catch (error) {
    // file not exist as a result no need to handle it
    return false;
  }
};

module.exports = {
  deleteFile
};
