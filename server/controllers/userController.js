const userService = require("../sarvices/userService");
const { CLIENT_URL, CLIENT_PROB_URL } = require("../config/config");
const ApiError = require("../exceptions/apiError");
const tokenService = require("../sarvices/tokenService");
const mailService = require("../sarvices/mailService");
const userModel = require("../models/userModel");
const tokenModel = require("../models/tokenModel");
const bcrypt = require("bcrypt");

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        console.log(error)
        return next(
          ApiError.badRequest("Validation is failed", errors.array())
          
        );
      }

      const { email, password } = req.body;
      const userData = await userService.registration(email, password);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);

      res.clearCookie("refreshToken");

      return res.json(token);
    } catch (e) {
      next(e);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;

      await userService.activate(activationLink);

      return res.redirect(CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async getUser(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  async forgotPassword(req, res, next) {
    try {
      const {
        user,
        body: { email },
      } = req;

      const token = tokenService.generateActionToken({ user: user._id });
      await tokenService.saveToken(user._id, token);
      const forgotPasswordUrl = `${CLIENT_PROB_URL}/password/forgot?token=${token}`;
      await mailService.forgotPasswordSendMail(email, forgotPasswordUrl);

      res.json("ok");
    } catch (e) {
      next(e);
    }
  }

  async setPasswordAfterForgot(req, res, next) {
    try {
      const { user, body } = req;
      console.log(user, body);
      const newPassword = await bcrypt.hash(body.password, 3);
      await userModel.updateOne({ _id: user._id }, { password: newPassword });
      await tokenModel.deleteMany({ user_id: user._id });
      res.json("ok");
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserController();
