// servidor http

const http = require("http");
const arquivo = require("./node")

let servidor = http.createServer(function(req, res){
    console.log(req.url);
    if (req.url == "/contato") {
        res.writeHead(200);
        res.end("Pagina de contato");
    } else if (req.url == "/") {
        res.writeHead(200);
        res.end("Pagina Index");
    }else if (req.url == "/clientes")
    {
        res.writeHead(200);    
        arquivo.lerClientes(function(conteudo){
            res.end(conteudo)
        })  
    } else {
        res.writeHead(404);
        res.end("Pagina não encontrada");
    }
});

servidor.listen(8000, function(){
    console.log("servidor iniciado");
});