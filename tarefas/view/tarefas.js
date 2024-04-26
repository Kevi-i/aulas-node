
let usuario = window.sessionStorage.getItem("usuario");

if (!usuario) {
    console.log("sem usuario logado");
    window.location.pathname = "/login.html";
}

usuario = JSON.parse(usuario);

// executa quando a pagina for completamente carregada
$().ready(function(){

    let SERVIDOR = 'http://localhost:8000';
    
    if (window.location.hostname != ''){
        SERVIDOR = 'https://tarefas-backend.onrender.com';
    }

    // deslogar
    $("#bt-usuario").html(usuario.nome);
    $("#bt-usuario").click(function(){
        window.sessionStorage.removeItem("usuario");
        window.location.pathname = "/login.html";
    });
    
    // lista todos ao iniciar
    carregar();
    
    $('#menu a').click(function(){
        $('#menu a').removeClass("active");
        $(this).addClass("active");
        let concluido = $(this).attr("concluido");
        carregar(concluido);

    }); // fim click

    $("#add-tarefa").click(function(){
        $("#tela-add").modal('show');

        $("#titulo").val("");
        $("#data-conclusao").val("");
        $("#titulo").removeClass("is-invalid");


    }); // fim add-tarefa

    function carregar(concluido)
    {
        $.getJSON(SERVIDOR + '/listar-tarefas?concluido='+concluido, function(dados){

        // limpa a lista
        $("#lista-tarefas").empty();

            dados.forEach(function(elem){
                
                let dia = new Date(elem.data_limite);
                
                let checado = "";
                if (elem.concluido == true){
                    checado = " checked ";
                }

                let item = '<label class="list-group-item d-flex gap-3 d-flex justify-content-between">'
                    +'<span class="pt-1 form-checked-content">'
                    +'<input codigo="'+ elem._id +'" class="form-check-input check-concluido  me-2 flex-shrink-0" type="checkbox" value="" '
                    + checado
                    +'style="font-size: 1.375em;">'
                    +'<strong>'+ elem.titulo +'</strong>'
                    +'<small class="d-block text-body-secondary">'
                    +'  <svg class="bi me-1" width="1em" height="1em"><use xlink:href="#calendar-event"></use></svg>'
                    +dia.toLocaleString()
                    +'</small>'
                    +'</span>'
                    +'<div>'
                    +'<button class="btn btn-info bt-alterar" dados=\''+ JSON.stringify(elem) +'\' >Alterar</button>'
                    +'<button codigo="'+ elem._id +'" class="btn btn-danger bt-del">Deletar</button>'
                    +'</div>'
                    +'</label>';
                
                $("#lista-tarefas").append(item);

            }); // fim do foreach

        }); // fim do getJson
    } // fim function

    $("#bt-salvar").click(function(){

        let dados = {};
        dados.titulo = $("#titulo").val();
        dados.data = $("#data-conclusao").val();

        if (dados.titulo == ""){
            $("#titulo").addClass("is-invalid");
            return;
        }

        let id = $("#id-tarefa").val();

        if (id == "")
        {
            $.post(SERVIDOR + "/nova-tarefa", dados, function(retorno){
                console.log(retorno);

                $("#tela-add").modal('hide');
                carregar();

            });
        } else {
            dados.id = id;

            $.post(SERVIDOR + "/alterar-tarefa", dados, function(retorno){
                console.log(retorno)
                $("#tela-add").modal('hide');
                carregar();
            });
        }

    }); // fim do bt-salvar

    $("#lista-tarefas").on("click", ".bt-del", function(){
        let codigo = {
            id: $(this).attr("codigo") 
        };
        
        $.post(SERVIDOR + "/deletar-tarefa", codigo, function(retorno) {
            console.log(retorno);
            carregar();
        })
    }); // fim do click bt-del

    $('#lista-tarefas').on("click", ".check-concluido", function(){
        let codigo = {
            id: $(this).attr("codigo"),
            alterado: {
                concluido: true
            }
        };

        $.post(SERVIDOR + "/alterar-tarefa", codigo, function(retorno){
            console.log(retorno)
        });
        
    }); // fim do check-concluido

    $("#lista-tarefas").on("click", ".bt-alterar", function(){
        $("#tela-add").modal('show');
        $("#titulo").removeClass("is-invalid");
        
        let dados = $(this).attr("dados");
        dados = JSON.parse(dados);

        $("#titulo").val(dados.titulo);
       $("#data-conclusao").val(dados.data_limite)
       $("#id-tarefa").val(dados._id);

    }); //fim do bt-alterar

    
  }); // fim do ready