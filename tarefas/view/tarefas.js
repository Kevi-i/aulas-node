// executa quando a pagina for completamente carregada
$().ready(function(){

    let SERVIDOR = 'http://localhost:8000';
    
    
    // lista todos ao iniciar
    carregar();
    
    $('#menu a').click(function(){
        $('#menu a').removeClass("active");
        $(this).addClass("active");
        let concluido = $(this).attr("concluido");
        carregar(concluido);

    }); // fim click

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
                    +'<button codigo="'+ elem._id +'" class="btn btn-danger bt-del">Deletar</button>'
                    +'</label>';
                
                $("#lista-tarefas").append(item);

            }); // fim do foreach

        }); // fim do getJson
    } // fim function

    $("#bt-salvar").click(function(){

        let dados = {};
        dados.titulo = $("#titulo").val();
        dados.data = $("#data-conclusao").val();

        console.log(dados);

        $.post(SERVIDOR + "/nova-tarefa", dados, function(retorno){
            console.log(retorno);

            $("#tela-add").modal('hide');
            carregar();

        });

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

    
  }); // fim do ready