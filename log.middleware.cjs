function logger(request, response, next) {
  console.log(`Ada Request dari ${request.url}`);

  next();
}

module.exports = { logger };
