const express = require('express');
const port = process.env.PORT || 8092;
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


// Routes
const auth = require('./routes/auth');
const addNote = require('./routes/addNote');
const deleteNote = require('./routes/deleteNote');
const editNote = require('./routes/editNote');
const getNotes = require('./routes/getNotes');
const reg = require('./routes/reg');

// MidleWares
app.use(express.json());
app.use(cors());
app.use('/api/auth', auth);
app.use('/api/reg', reg);
app.use('/api/addNote', addNote);
app.use('/api/deleteNote', deleteNote);
app.use('/api/editNote', editNote);
app.use('/api/getNotes', getNotes);

// Db Connect
mongoose.connect(process.env.DbConnect,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{console.log('connected to db.')})
  .catch((err)=>{console.log(err)});

// Server Status
app.get('/',({req, res})=>{
    res.send(`Server is up and running @ ${port}`).status(200);
})


app.listen(port, () => { console.log(`App is up and running @ ${port}`) })