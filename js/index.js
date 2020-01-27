function copy(nome, email) {
    var componente = 
        '<div class=\"container\">'
      + '   <div><label >Nome:</label></div>' 
      + '   <div><input type="text" name="nome" id="nome" value=\"'+ $(nome).val() + '\" /></div>' 
      + '   <div><label >Email:</label></div>' 
      + '   <div><input type="text" name="email" id="email" value=\"'+ $(email).val() + '\"/></div>' 
      + '   <br>' 
      + '   <div><button onclick="apagarComponente(this)">Excluir</button></div>'       
      + '</div>';       

      $('#target').append(componente);
}

function apagarComponente(elemento) {
    $(elemento).parent().parent().remove();
}