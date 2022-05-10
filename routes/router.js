const router = require('express').Router();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post("/:mac_add", validateUser);
router.get("/",reply);
// console.log(prism);
async function validateUser(req, res) {
    try{
    const mac_add = req.params.mac_add;   // get mac_address from url
    const user = await prisma.addresses.findOne({
        where:
        {
            mac_add: addresses.mac_add
    }});
    res.send("Valid");
    console.log("Yes response");
} catch(err){
    res.send("Invalid");
    console.log("No response");

}
}

async function reply(req,res){
    res.send("Route is working, Hoppscotch isnt");
}

module.exports = router;