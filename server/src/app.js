const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const routes = require('./routes');
const httpStatus = require('http-status');
const {errors} = require('celebrate');
const {responseMessages} = require('./config/responseMessages');

const app = express();

//Restricting access to specified origins only : client-ip
const corsOptions = {
  origin: config.ALLOWED_ORIGINS,
  credentials: true
};

app.use(errors());
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

const PORT = config.PORT;

//routes for accessing application
app.use('/api', routes);

//health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({message: `Server is running at port : ${PORT}`});
});

// global error handler
app.use((err, req, res, next) => {
  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR).json({
    message: err.message || responseMessages.INTERNAL_SERVER_ERROR
  });
});

//starting application at specified PORT
app.listen(PORT, () => {
  console.log(`Server started \nPort: ${PORT}\nURL: http://localhost:${PORT}`);
});
