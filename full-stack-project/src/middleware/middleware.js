var bodyParser = require('body-parser')
// var methodOverride = require('method-override')


function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}

function clientErrorHandler (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' })
  } else {
    next(err)
  }
}

function errorHandler (err, req, res, next) {
  res.status(500)
  res.render('Server Internal Error', { error: err })
  console.error(err);

}

exports = {logErrors, clientErrorHandler, errorHandler};
