require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URL: process.env.MONGO_URL,

  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  JWT_ACTION_SECRET: process.env.JWT_ACTION_TOKEN_SECRET,

  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,

  API_URL: process.env.API_URL,
  CLIENT_URL: process.env.CLIENT_URL,
  CLIENT_PROB_URL: process.env.CLIENT_FORGOT_PASSWORD,
};
