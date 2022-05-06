const mongoose=require("mongoose");
const productsSchema=mongoose.Schema({
    id:{type:Number,required:false},
    type : {type:String,required:true},
    img1:{type:String,required:true} ,
    img2: {type:String,required:true},
    img3:{type:String,required:true} ,
    img4: {type:String,required:true},
    title :{type:String,required:true},
    owner :{type:String,required:true},
    price :{type:Number,required:true},
    discounted_price :{type:Number,required:true},
    saveupto:{type:Number,required:true},
    color :{type:String,required:true},
    des :{type:String,required:true} ,
    code :{type:String,required:true} ,
    size:{type:Array,required:false}
  },{
    timestamps:true,
    versionKey:false,
})
const Products =mongoose.model("product",productsSchema);
module.exports=Products;