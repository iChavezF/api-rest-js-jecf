if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();    
}

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


//console.log(process.env.NODE_ENV)
//INITIALIZATIONS
const app = express();
//app.use(cors())
require('./database');

//SETTINGS
const port = process.env.PORT || 3000;


//MIDDLEWARES
const corsOptions = {
    origin:'*',
    methods:['POST','GET','PUT','DELETE','OPTIONS'],
    allowedHeaders:['Origin','X-Requested-With','contentType','Content-Type','Accept','Authorization'],
    credentials:true,
    optionsSuccessStatus:200
}


app.use(morgan('dev'));
/*
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads/'),
    filename(req,file,cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});
app.use(multer({storage}).single('image'));*/
app.use(cors(corsOptions));
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