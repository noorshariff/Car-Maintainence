const mongoose=require('mongoose');
const Schema=mongoose.Schema;


let carSchema=new Schema({
    carname:{
        type:String
    },
    company:{
        type:String
    },
    fueltype:{
        type:String
    },
    powersteering:{
        type:String
    },
    breaksystem:{
        type:String
    },
    showroomprice:{
        type:Number
    },
    onroadprice:{
        type:Number
    },
    imageurl:{
        type:String
    },
    mileage:{
        type:String
    },
    seatingcapacity:{
        type:String
    },
    enginecapacity:{
        type:String
    },
    geartype:{
        type:String
    }
})

module.exports=mongoose.model('carDetail', carSchema)


