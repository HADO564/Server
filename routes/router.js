const router = require('express').Router();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post("/:id", validateUser);
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
    res.send("Valid");
    console.log("Yes response");
    }
    else//if the mac address is unauthorized
    {
        res.send("Invalid");
    }
} catch(err){//in case there is an error
    res.send(err);
    console.log("No response");

}
}

async function reply(req,res){//testing function for routes
    res.send("Route is working);
}

module.exports = router;