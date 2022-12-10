const jwt = require('jsonwebtoken')
const tokenModel = require('../models/tokenModel')
const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = require('../config/config')

class TokenService {
    generateTokens(payload) {

        const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: '15m' })
        const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '30d' })

        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, JWT_ACCESS_SECRET)
            return userData
        }
        catch (e) {
            return null
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, JWT_REFRESH_SECRET)
            return userData
        }
        catch (e) {
            return null
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({ user: userId })
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await tokenModel.create({ user: userId, refreshToken })
        return token
    }

    async removeToken(refreshToken) {
        const tokenDate = await tokenModel.deleteOne({ refreshToken })
        return tokenDate
    }

    async findToken(refreshToken) {
        const tokenDate = await tokenModel.findOne({ refreshToken })
        return tokenDate
    }
}

module.exports = new TokenService()