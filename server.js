const express=require('express');
var data = require('./recipes.json');
const app=express();

app.listen(5000);
app.get("/api/recipes",function(req,res){
	res.send(data.recipes);
});

app.get("/api/recipes/:id",function(req,res){
	if(data.recipes[req.params.id]){
		res.send(data.recipes[req.params.id]);
	}else{
		res.status(404).send("Not Found");
	}
});
console.log("SEVER STARTED AT PORT 5000");
