if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();    
}

const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');


//console.log(process.env.NODE_ENV)
//INITIALIZATIONS
const app = express();
app.use(cors())
require('./database');

//SETTINGS
const port = process.env.PORT || 3000;


//MIDDLEWARES

app.use(morgan('dev'));
/*
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads/'),
    filename(req,file,cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});
app.use(multer({storage}).single('image'));*/
app.use(express.urlencoded({extended: false}));
app.use(express.json());//leer json


//ROUTES
app.use('/api/books', require('./routes/books.js'));


//STATIC FILES
//app.use(express.static(path.join(__dirname, 'public')));



//SERVER
app.listen(port, () => {
    console.log(`Server on port http://localhost:${port}`);
})