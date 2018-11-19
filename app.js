var express=require("express");
var bodyParser=require("body-parser");
var product=require('./routes/product.routes');
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/products',product);
let port=8080;
app.listen(port,function()
{
    console.log("Server is up and running at port number" + " " +port);
});
var mongoose=require("mongoose");
let dev_db_url="mongodb://localhost:27017/dcloud";
let mongoDB=process.env.MONGODB_URI||dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise=global.Promise;
let db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error:'));





