const userService = require("../sarvices/userService");
const { CLIENT_URL } = require("../config/config");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/apiError");
const tokenService = require("../sarvices/tokenService");
const UserDto = require("../dtos/userDto");
const mailService = require("../sarvices/mailService");
const tokenModel = require("../models/tokenModel");
const { findToken } = require("../sarvices/tokenService");

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
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

  async checkActionToken(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const usertokenData = await userService.refresh(refreshToken) 
      console.log(usertokenData)
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
      const { user } = req;
      const { email } = req.body;

      const userDto = new UserDto(user);
      const token = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id, token.refreshToken);
      const forgotPasswordUrl = `${CLIENT_URL}/password/forgot?token=${token.accessToken}`;

      await mailService.forgotPasswordSendMail(email, forgotPasswordUrl);

      res.json("ok");
    } catch (e) {
      nwxt(e);
    }
  }
}

module.exports = new UserController();
