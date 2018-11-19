var mongoose=require('mongoose');
var Schema=mongoose.Schema;
let ProductSchema=new Schema({
    name: {type:String,required:true,max:100},
    price: {type:Number,required:true},
});
module.exports=mongoose.model('Product',ProductSchema);
