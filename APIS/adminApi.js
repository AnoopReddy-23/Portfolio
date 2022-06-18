//create router to handle user api requests
const { request } = require("express");
const { response } = require("express");
const exp = require("express");
const expressAsyncHandler = require("express-async-handler");
const adminApp = exp.Router();
//to extract body of request object
adminApp.use(exp.json());
//to extract body of request object
require("dotenv").config();


var cloudinary=require("cloudinary").v2;
const {CloudinaryStorage}=require("multer-storage-cloudinary");
const multer=require("multer");

//configure cloudinary
cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.API_KEY,
  api_secret:process.env.API_SECRET,
  secure:true,
});
//configure the storage
const cloudinarystorage=new CloudinaryStorage({
  cloudinary:cloudinary,
  params:async(req,file)=>{
    return{
      folder:"images",//here all images are stored and the name can be anything
      public_id:file.fieldname+"-"+Date.now(),
    }
  }
})
//configure the multer(middleware)
var upload=multer({storage:cloudinarystorage});


//creatr product using asyn and await
adminApp.post(
  "/CreateProducts",upload.single("photo"),
  expressAsyncHandler(async (request, response) => {
    // get productCollectionObject

    let EventObj = request.app.get("adminObj");
    //get userobj as string from client and convert into object
    let EObj = JSON.parse(request.body.Obj);
    //add profile image link to newUserObj
    EObj.Img=request.file.path
    //remove photo property
    delete EObj.photo
    let result = await EventObj.insertOne(EObj);
    if (result == undefined) {
      response.send({ message: "no event has been created!" });
    } else {
      response.send({ message: "Event has been successfully created!!"});
    }
  })
);

adminApp.get(
  "/getEvents",
  expressAsyncHandler(async (request, response) => {
    //getuserCollectionobject
    let EventObj= request.app.get("adminObj");
    let result = await  EventObj.find().toArray();
    if (result == undefined) {
      response.send({ message: "no event found!" });
    } else {
      response.send({ message: "All Events", payload: result });
      //console.log(result)
      //result.map((e)=>{console.log(e)})
    }
    //get userobj from client
  })
);



//export apis
module.exports = adminApp;
