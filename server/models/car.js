const mongoose  = require('mongoose');

const carSchema = mongoose.Schema({
    name: { type:String, required:true },
    model: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }
});

const Car = module.exports = mongoose.model('Car', carSchema);