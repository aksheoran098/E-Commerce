const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name : {
        type :String,
        required : [true, "Please enter product name."],
        trim : true
    },
    price : {
        type: Number,
        required : [true, "Please enter product price."],
        maxLenght : [8, "Price can't exceed 8 characters."]
    },
    description :{
        type : String,
        required : [true, "Please enter product description."]
    },
    rating : {
        type : Number,
        default : 0
    },
    images : [
        {
            public_id : {
                type : String,
                required : true
            },
            url : {
                type : String,
                required : true
            }
        }
    ],
    category : {
        type : String,
        required : [true, "Please enter product category."]
    },
    Stock : {
        type : Number,
        required: [true, "Please enter product stock"],
        maxLenght : [4, "Stock can't exceed 4 characters"],
        default : 1
    },
    numOfReviews:{
        type : Number,
        default: 0
    },
    reviews : [
        {
            name : {
                type :String,
                required : true
            },
            rating : {
                type: Number,
                required : true
            },
            comment : {
                type : String,
                required : true
            }
        }
    ],
    createdAt : {
        type : Date,
        default : Date.now
    }

})

// it will be created like a collection.
// in MongoDB s ia automatically added at last in "Product".

module.exports = mongoose.model("Product", productSchema)


//  Demo input is here.

// {
//     "name" : "product 1",
//     "price" : 1200,
//     "description" : "This is sample description",
//     "images" : {
//         "public_id" : "Sample Id",
//         "url" : "Sample Url"
//     },
//     "category" : "laptop"
    
// }