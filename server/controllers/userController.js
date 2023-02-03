const userService = require("../sarvices/userService");
const { CLIENT_URL, CLIENT_PROB_URL } = require("../config/config");
const ApiError = require("../exceptions/apiError");
const tokenService = require("../sarvices/tokenService");
const mailService = require("../sarvices/mailService");
const userModel = require("../models/userModel");
const tokenModel = require("../models/tokenModel");
const bcrypt = require("bcrypt");
const UserDto = require("../dtos/userDto");

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        console.log(error);
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
        user: { id },
        body: { email },
      } = req;

      const token = tokenService.generateActionToken({ userId: id });

      await tokenService.saveToken(id, token);

      const forgotPasswordUrl = `${CLIENT_PROB_URL}/password/forgot?token=${token}`;

      await mailService.forgotPasswordSendMail(email, forgotPasswordUrl);
      res.json("ok");
    } catch (e) {
      next(e);
    }
  }
  async setPasswordAfterForgot(req, res, next) {
    try {
      const {
        user,
        body: { password, token },
      } = req;

      const userDto = new UserDto(user);
      const newPassword = await bcrypt.hash(password, 3);
      
      await userService.updatePassword(userDto.id, newPassword);

      await tokenService.removeToken(token);
      res.json("ok");
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
