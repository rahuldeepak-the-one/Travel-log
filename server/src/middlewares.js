const notFound = (req, res, next) => {
    const error = new Error(`Not found requested ${req.originalUrl}`);
    res.status(404);
    next(error);
};

// eslint-disable-next-line no-unused-vars
const errHandler = (error, req, res, next) => {
    const status_code = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(status_code);
    res.json({
      message: error.message,
      stack: process.env.NODE_ENV === 'production' ? '😒😒😒' : error.stack,
    });
};

module.exports = {
    notFound,
    errHandler,
};