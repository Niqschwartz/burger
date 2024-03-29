var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res){
    burger.all(function(burgerData){
        res.render("index", {burger_data:burgerData});
    })
})
router.post("/burgers/create", function(req, res){
    burger.create(req.body.burger_name, function(result){
        console.log(result);
        res.redirect("/");
    })
})
router.put("/burger/:id" , function(req, res){
    console.log("id of the burger: " +req.params.id)
    burger.update(req.params.id, function(result){
        console.log(result)
        res.sendStatus(200)
    })
})

module.exports = router;