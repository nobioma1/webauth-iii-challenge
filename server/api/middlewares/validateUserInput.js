module.exports = (req, res, next) => {
  const { body } = req;
  const hasRequiredFields = 'username' && 'password' && 'department' in body;

  if (hasRequiredFields) {
    return next();
  }
  return res.status(400).json({
    message: 'Fields username, password and department are Required ',
  });
};
