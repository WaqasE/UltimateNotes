const router = require('express').Router();
const { Note } = require('../model/notes');

router.get('/',({req, res})=>{
    res.send('ok').status(200);
})

module.exports = router;