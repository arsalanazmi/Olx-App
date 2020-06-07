const express = require('express');
const router = express.Router();
const RegistrationController = require('../Controllers/RegistrationController');

router.route('/user')

.post(function (req, res) {
  console.log(req.body.user);
    RegistrationController.userRegister(req.body.user)
      .then(function (response) {
        res.json(response.message)
      }).catch(function (response) {
        res.send(response.message);
      });
  });

module.exports = router;