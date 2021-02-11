module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'Yor are not login !' });
  }
  next();
};
