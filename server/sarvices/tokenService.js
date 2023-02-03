const jwt = require("jsonwebtoken");
const tokenModel = require("../models/tokenModel");
const {
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  JWT_ACTION_SECRET,
} = require("../config/config");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, {
      expiresIn: "15m",
    });

    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  generateActionToken(encodeData = {}) {
    return jwt.sign(encodeData, JWT_ACTION_SECRET, { expiresIn: "24h" });
  }

  validateActionToken(token) {
    try {
      const updateData = jwt.verify(token, JWT_ACTION_SECRET);
      return updateData;
    } catch (e) {
      return null;
    }
  }
  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, JWT_ACCESS_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, JWT_REFRESH_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await tokenModel.create({ user: userId, refreshToken });
    return token;
  }

  async removeToken(refreshToken) {
    const tokenDate = await tokenModel.deleteOne({ refreshToken });
    return tokenDate;
  }

  async findToken(refreshToken) {
    const tokenDate = await tokenModel
      .findOne({ refreshToken }).populate('_id')
      if(!tokenDate|| !tokenDate._id){
        return next(new ApiError('Token not valid'), 403)
      }
      
    return tokenDate;
  }
}

module.exports = new TokenService();
