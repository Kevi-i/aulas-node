const express = require("express");

const app = express();


app.get("/contato", function(req, res){
    res.send("pagina de contato");
});

app.listen(8000);