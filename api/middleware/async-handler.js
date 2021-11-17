
exports.asyncHandler = (cb) => { 
    return async (req, res, next) => {
      try {
        await cb(req, res, next);
      } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
          const errors = error.errors.map(err => err.message);
          res.status(400).json({ errors });   
          console.log(error);
          next(error);
        } else {
         // Forward error to the global error handler
          next(error);  
        }
          
      }
     
    }
  }

 