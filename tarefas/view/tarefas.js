// executa quando a pagina for completamente carregada
$().ready(function(){
    
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
        $.getJSON('http://localhost:8000/listar-tarefas?concluido='+concluido, function(dados){

        // limpa a lista
        $("#lista-tarefas").empty();

            dados.forEach(function(elem){
                
                let dia = new Date(elem.data_limite);
                
                let checado = "";
                if (elem.concluido == true){
                    checado = " checked ";
                }

                let item = '<label class="list-group-item d-flex gap-3">'
                    +'<input class="form-check-input flex-shrink-0" type="checkbox" value="" '
                    + checado
                    +'style="font-size: 1.375em;">'
                    +'<span class="pt-1 form-checked-content">'
                    +'<strong>'+ elem.titulo +'</strong>'
                    +'<small class="d-block text-body-secondary">'
                    +'  <svg class="bi me-1" width="1em" height="1em"><use xlink:href="#calendar-event"></use></svg>'
                    +dia.toLocaleString()
                    +'</small>'
                    +'</span>'
                    +'</label>';
                
                $("#lista-tarefas").append(item);

            }); // fim do foreach

        }); // fim do getJson
    } // fim function
    
  }); // fim do ready