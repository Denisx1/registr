const Router = require("express").Router;
const userController = require("../controllers/userController");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddlewares");
const userService = require("../sarvices/userService");
const actionTypeEnum = require("../constant");

const router = new Router();

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  userController.registration
);

router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post(
  "/password/forgot",
  body("email").isEmail(),
  userService.getUserDynamycally("email"),
  userController.forgotPassword
);

router.patch("/password/forgot",userService.checkActionToken(actionTypeEnum.FORGOT_PASSWORD), userController.setPasswordAfterForgot)
router.get("/activated/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", authMiddleware, userController.getUser);

module.exports = router;
