let SERVIDOR = 'http://localhost:8000';
    
if (window.location.port == 80){
    SERVIDOR = 'https://tarefas-backend.onrender.com';
}

$().ready(function(){

    $("#bt-entrar").click(function(){
        let usuario = $("#usuario").val();
        let senha = $("#senha").val();

        let dados = {
            usuario,
            senha
        }

        $.post(SERVIDOR + "/logar", dados, function(retorno){
            
            if (retorno.erro){
                $("#msg-erro").removeClass("d-none");
                $("#msg-erro").html(retorno.erro)
            } else {
                window.sessionStorage.setItem("usuario", JSON.stringify(retorno) )

                window.location.pathname = "/index.html"
            }

        });
        

    }); // fim do bt-entrar

}); //fim do ready