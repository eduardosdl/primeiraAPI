const express = require('express');
const router = express.Router();
const controller = require('../controllers/UserController');

router.post('/new', controller.newUser);

router.get('/login', controller.loginUser);

router.patch('/edit/pass', controller.editUserPass);

router.delete('/del/:id', controller.deleteUser);

module.exports = router;