const UserModel = require('../models/userModel')
const bctypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mailService')
const tokenService = require('../sarvices/tokenService')
const UserDto = require('../dtos/userDto')
const { API_URL } = require('../config/config')
const ApiError = require('../exceptions/apiError')

class UserService {
    async registration(email, password) {

        const candidate = await UserModel.findOne({ email })

        if (candidate) {
            throw ApiError.badRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }

        const hashPassword = await bctypt.hash(password, 3)
        const activationLink = uuid.v4()

        const user = await UserModel.create({ email, password: hashPassword, activationLink })
        await mailService.sendActivationMail(email, `${API_URL}/api/activated/${activationLink}`)


        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto })
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }

    }

    async activate(activationLink) {

        const user = await UserModel.findOne({ activationLink })

        if (!user) {
            throw ApiError.badRequest('Uncorrectly link')
        }

        user.isActivated = true
        await user.save()
    }

    async login(email, password) {

        const user = await UserModel.findOne({ email })

        if (!user) {
            throw ApiError.badRequest('User is absent')
        }

        const isPassEquels = await bctypt.compare(password, user.password)

        if (!isPassEquels) {
            throw ApiError.badRequest('Password is failed')
        }

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto })

        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {
            ...tokens,
            user: userDto
        }
    }

    async logout(refreshToken) {

        const token = await tokenService.removeToken(refreshToken)

        return token
    }

    async refresh(refreshToken) {

        if (!refreshToken) {
            throw ApiError.UnauthorizationError()
        }

        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenfromDb = await tokenService.findToken(refreshToken)

        if (!userData || !tokenfromDb) {
            throw ApiError.UnauthorizationError()
        }

        const user = await UserModel.findById(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto })
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }

    async getAllUsers() {

        const users = await UserModel.find()
        return users
    }

    getUserDynamycally = (
        paramName = "_id",
        where = "body",
        dataBaseField = paramName
      ) => {
        return async (req, res, next) => {
          try {
            const findObject = req[where];
            
      
            if (!findObject || typeof findObject !== "object") {
              next(new ApiError.UnauthorizationError());
              return;
            }
            const param = findObject[paramName];
            
            const userx = await UserModel.findOne({[dataBaseField]: param}).select('password')
            
            if (!userx) {
              next(new ApiError.UnauthorizationError());
              return;
            }
            console.log('111')
    
            req.user = userx;
    
            next();
          } catch (e) {
            next(e);
          }
        };
      };

}

module.exports = new UserService()