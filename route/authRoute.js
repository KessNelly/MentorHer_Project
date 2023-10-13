const express = require ('express');
const { createUser, loginUser, forgotPassword, resetPassword, getallUsers, updateaUser, logOut, handleRefreshToken, updatePassword, forgotPasswordToken, getaUser } = require('../controller/userController');
const {authMiddleware, isAdmin} = require ("../middlewares/authMiddleware");
const router = express.Router();


router.post('/register', createUser);
router.post('/forgot-password-token', forgotPasswordToken);
router.put('/reset-password/:token', resetPassword);
router.put('/password',authMiddleware, updatePassword);

router.post('/login', loginUser);
router.get('/all-users', getallUsers);

router.get('/refresh', handleRefreshToken);
router.get('/logout', logOut);
router.get('/:id',authMiddleware, isAdmin, getaUser);

router.put('/edit-user',authMiddleware, updateaUser);


module.exports = router;