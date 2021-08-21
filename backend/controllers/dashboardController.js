
const moment = require('moment');


const chartDataSchema = require('../models/chartData')



async function saveData(req,res)
{
     
    try{
         let type = req.body.type ;
         let elements = req.body.elements;

         let dataObject = new chartDataSchema({
             "type" : type ,
             "elements" : elements
         })
          
         dataObject.save().then(status=>{
                console.log("Status on succesfull data saving is",status);
                res.status(400).send({"message" : "Data Saved Succesfully"});
         })
         .catch(e=>{
             console.log("error in save query is ",e);
         })
    }
    catch(e){
        console.log("error in saving the data is ",e);
        res.status(400).send({"Error" : e})
    }
}

async function fetchData(req,res)
{
    try{
        console.log("inside fetch data req.bod is ",req.body.type)
        let type = req.body.type ? req.body.type :"Line" ;
     
        chartDataSchema.findOne({"type" : type}).then(data=>{
               console.log("Data comming from the databse is",data);
               res.status(200).send({"data" : data});
        })
        .catch(e=>{
            console.log("Error in fetch query is ",e);
            res.status(400).send({"error" : e});
        })
   }
   catch(e){
       console.log("error in fetching the data is ",e);
       res.status(400).send({"Error" : e})
   }
}


async function fetchDataWithGetMethod(req,res)
{
    try{
        console.log("Query Params in datafetchDataWithGetMethod are",req.query.type)
        let type = req.query.type;
     
        chartDataSchema.findOne({"type" : type}).then(data=>{
               console.log("Data comming from the databse is",data);
               res.status(200).send({"data" : data});
        })
        .catch(e=>{
            console.log("Error in fetch query is ",e);
            res.status(400).send({"error" : e});
        })
   }
   catch(e){
       console.log("error in fetching the data is ",e);
       res.status(400).send({"Error" : e})
   }
}


module.exports = {
    saveData,
    fetchData,
    fetchDataWithGetMethod
}

