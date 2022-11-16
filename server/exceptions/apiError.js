module.exports = class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []){
        super(message)
        this.status = status
        this.errors = errors
    }

    static UnauthorizationError() {
        return new ApiError(401, 'User doesn`t authorization ')
    }

    static badRequest(message, errors = []) {
        return new ApiError(400, message, errors)
    }
}