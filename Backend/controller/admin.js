const Car = require('../model/admin');
const ObjectId = require('mongoose').Types.ObjectId;



exports.postCarData = ((req, res) => {
    var cardata = new Car({
        carname: req.body.carname,
        company: req.body.company,
        fueltype: req.body.fueltype,
        powersteering: req.body.powersteering,
        breaksystem: req.body.breaksystem,
        showroomprice: req.body.showroomprice,
        onroadprice: req.body.onroadprice,
        imageurl: req.body.imageurl,
        mileage: req.body.mileage,
        seatingcapacity: req.body.seatingcapacity,
        enginecapacity: req.body.enginecapacity,
        geartype: req.body.geartype
    })
    cardata.save().then(data=>{
        console.log(data,"post data backend");
       return res.json(data);
    }).catch(err=>{
        console.log(err)
    })

})

exports.getCarData=((req,res)=>{
    Car.find().then(data=>{
        console.log(data,"getting from backend");
        return res.json(data)
    }).catch(err=>{
        console.log(err);
    })
})


exports.updateCarData=(req,res)=>{
    let id=req.body.id;
    let carname=req.body.carname;
    let company=req.body.company;
    let fueltype=req.body.fueltype;
    let powersteering=req.body.powersteering;
    let breaksystem=req.body.breaksystem;
    let showroomprice=req.body.showroomprice;
    let onroadprice=req.body.onroadprice;
    let imageurl=req.body.imageurl;
    let mileage=req.body.mileage;
    let seatingcapacity=req.body.seatingcapacity;
    let enginecapacity=req.body.enginecapacity;
    let geartype=req.body.geartype;
    Car.findById(id).then(card=>{
        console.log(card, "updated data");
        card.carname=carname;
        card.company=company;
        card.fueltype=fueltype;
        card.powersteering=powersteering;
        card.breaksystem=breaksystem;
        card.showroomprice=showroomprice;
        card.onroadprice=onroadprice;
        card.imageurl=imageurl;
        card.mileage=mileage;
        card.seatingcapacity=seatingcapacity;
        card.enginecapacity=enginecapacity;
        card.geartype=geartype;
        card.save();
        return res.json(card)
    }).catch(err=>{
        console.log(err)
    })
}


exports.deleteCarData=((req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send("No records found by this id");

    Car.findByIdAndRemove(req.params.id, (err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
             console.log(err)
        }
    })
})

