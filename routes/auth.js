const router = require('express').Router();
const { User } = require('../model/users');

router.post('/',({req, res})=>{
    res.send('ok').status(200);
})

module.exports = router;