var Product=require('../models/product.models');

exports.test=function(req,res){
    res.send('Greetings from the test controller!');
}
exports.product_create=function(req,res){
    let product=new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save(function(err,resp)
    {
        if(err)
            res.send(err);
        res.send("Product Created Successfully" + resp);
    })
};
exports.product_details=function(req,res){
    Product.findById(req.params.id,function(err,product)
    {
        if(err)
            res.send(err);
        res.send("Product details are " + product);
    })

};
exports.product_update=function(req,res){
    Product.findByIdAndUpdate(req.params.id,{$set:req.body},
        function(err,product)
            {
                if(err)
                return next(err);
                res.send("Product updated" + product);
            })
};
exports.product_delete=function(req,res)
{
    Product.findByIdAndRemove(req.params.id,function(err)
    {
        if(err)
        return next(err);
        res.send("Deleted Successfully");
    })
};
exports.product_coll=function(req,res)
{
    Product.find(function(err,product)
    {
        if(err)
            res.send(err);
        res.send("Products are " + product);
    })
};