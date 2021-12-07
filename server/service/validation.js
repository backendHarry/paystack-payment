const joi = require("joi");

const validationSchema = joi.object({
  username: joi.string().required().min(5).messages({
    "any.required": "Please, enter a username",
    "string.min": "sorry, username must be greater than 5 characters",
  }),
  email: joi.string().required().email().messages({
    "any.required": "Please, Email is needed for registration",
    "string.email": "Please, enter a valid email",
  }),
  password: joi.string().min(6).messages({
    "any.required": "please enter a password",
    "string.min": "your password must not have a minimium of 6 characters",
  }),
  // confirmPassword: joi.any().valid(joi.ref("password")).required().messages({
  //   "any.only": "Passwords do not match",
  //   "any.required": "Please re-enter your password",
  // }),
});

const validateBody = (data) => {
  const errorMsg = {
    username: null,
    email: null,
    password: null,
  };
  const { error, value } = validationSchema.validate(data);
  if (error) {
    const { path, message } = error["details"][0];
    errorMsg[path[0]] = message;
    return { error: errorMsg };
  } else {
    return { value: value };
  }
};

module.exports = validateBody;
