var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!")
});

app.get("/speak/:animal", function(req, res) {
    var sounds = {
        pig: "oink!",
        cow: "moo!",
        dog: "woof woof!",
        cat: "I hate you, human.",
        goldfish: "...bloop."
    };
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    
    res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:message/:times", function(req, res) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    
    for(var i = 0; i < times; i++){
        result += message + " ";
    }
    res.send(result);
});

app.get("*", function(req, res){
    res.send("No directory found, my apologies sir. Are you feeling well?");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Now serving your app, sir.");
});