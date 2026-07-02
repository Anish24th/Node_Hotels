const mongoose= require ('mongoose');

const menuItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
      type: Number,
      reqiured : true,
    },
    taste: {
        type: String,
        enum :['sweet','spicy','sour'],
        required: true,
    },
    is_drink :{
        type: Boolean,
        default :false,
        required : true ,
    },
    ingredients:{
        type : [String],
        default : [],
        required : true,
    },
    num_sales:{
     type: Number,
     default : 0,
    }

})

const menuItem= mongoose.model('menuItem',menuItemSchema);

module.exports=menuItem;