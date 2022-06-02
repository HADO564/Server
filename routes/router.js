const router = require('express').Router();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


function log_date(){
let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

// prints date in YYYY-MM-DD format
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
}

router.get("/:id", validateUser);
//router.post("/addAddress/:id", addAddress);//in case i decide to make an online app for registration of mac addresses
router.get("/",reply);
// console.log(prism);
async function validateUser(req, res) {
    try{
    const id = req.params.id;   // get mac_address from url
    const user = await prisma.addresses.findUnique({//query to check if a mac address is authorized
        where:
        {
            mac_add: id
    }});
    if( user!=null)//if the mac address is authorized
    {
    console.log("Access Granted at: ")
    log_date();
    console.log("To mac address :")
    console.log(id);
    res.send("valid");
    }
    else//if the mac address is unauthorized
    {
        res.send("invalid");
    }
} catch(err){//in case there is an error
    res.send(err);
    console.log("No response");

}
}



async function reply(req,res){//testing function for routes
    res.send("Route is working");
}


module.exports = router;