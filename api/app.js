'use strict';

// load modules
const express = require('express');
const morgan = require('morgan');
const sequelize = require('./models').sequelize;
const user = require('./routes/user');
const course = require('./routes/course');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// app.use(function(req, res, next) {  //stack over flow
//   res.header("Access-Control-Allow-Origin", CLIENT_ORIGIN);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
//   res.header("Access-Control-Allow-Credentials", true);
//   if (req.method === "OPTIONS") {
//     return res.sendStatus(204);
//   }
//   next();
// });

// fetch(`${API_BASE_URL}/dept/get/`, {
//   method: 'GET',
//   credentials: 'include',   
// })

(async() => {
  try{
    await sequelize.authenticate();
    console.log('Connection to the database was successful')
    await sequelize.sync();
  }catch(error){
    console.log('There was a problem')

  }
})();

// variable to enable global error logging
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';



app.use(express.json());

app.use('/api', user);
app.use('/api', course);
// setup morgan which gives us http request logging
app.use(morgan('dev'));



// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

// setup a global error handler
app.use((err, req, res, next) => {
  try{
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
}catch(error){
  if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
    const errors = error.errors.map(err => err.message);
    res.status(400).json({ errors });   
    console.log(error);
  } else {
     
    throw error; 
    
    
  }}
});





// start listening on our port
const server = app.listen(process.env.PORT || PORT, () => {
  console.log(`Express server is listening on port ${server.address().PORT}`);
});
