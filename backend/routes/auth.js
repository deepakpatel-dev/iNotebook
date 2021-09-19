const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const router = express.Router();

// Create a User using : POST "./api/auth" .Doesn't require Auth
router.post('/createuser',[
    body('name','Enter a valid name').isLength({min : 3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 5 character').isLength({min:5})
], (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user))   // Alternate way to declare --->>> res.send(req.body)
      .catch(err=>{console.log(err)
    res.json({'error':'Email id is already resgistered',message : err.message})})
} )

module.exports = router
