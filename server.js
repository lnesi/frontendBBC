const express=require('express');
var data = require('./recipes.json');
const app=express();

app.listen(5000);
app.get("/api/recipes",function(req,res){
	res.send(data.recipes);
});
console.log("SEVER STARTED AT PORT 5000");
