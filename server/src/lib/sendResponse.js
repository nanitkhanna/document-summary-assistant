// Response wrapper in order to maintain consistent responses from server for all http requests
module.exports.sendResponse = async (res, status, message, data) => {
  return res.status(status).send({
    message,
    data
  });
};
