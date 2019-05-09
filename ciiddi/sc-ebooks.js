/*
SC-Ebook: Script para mostrar los pdfs del Congreso.
Autor: Juan Puca (jarp@outlook.com)

12/05/16: Última actualización. 
*/

$(document).ready(function () {
  var json;
  var filtroArea = "";
  var filtroTipo = "";

  // Traer los datos del JSON
  $.getJSON('ebook.json', function (data) {
    json = JSON.stringify(data);

    //recorrer datos
    $(data).each(function (index, value) { agregarItems(value); });

    //agregar datos    
    function agregarItems(value) {
      $('#Seleccionador ul').append('<li class="list-group-item"><a class="info" href="#" data-titulo="' + value.titulo
        + '" data-autores="' + value.autores
        + '" data-categoria="' + value.categoria
        + '" data-tipo="' + value.tipo
        + '" data-archivo="' + value.archivo
        + '" data-titulo="' + value.titulo
        + '">' + value.titulo
        + '</a></li>');
    }

    //filtro tipo
    $("#SeleccionaTipo li").click(function () {
      //alert($(this).html());
      $('#show').empty();
      $('#showdata').empty();
      var seleccionado = $(this).html();
      if (seleccionado == "Todos") {
        filtroTipo = "";
        
        $('#Seleccionador ul').find("li").slideDown();
        //$("#btnArea:first-child").text($(this).text());
      }
      else {
        filtroTipo = seleccionado;
        filtrarDos();    
        //$("#btnArea:first-child").text($(this).text());
      }

    });

    function filtrarDos() {
       $("li a[data-tipo!='" + filtroTipo + "']").parent().slideUp();
         $("li a[data-tipo*='" + filtroTipo + "']").parent().slideDown();
  }


    //Selecciona area -> filtra 
    $("#SeleccionaArea li").click(function () {
      //alert($(this).html());
      $('#show').empty();
      $('#showdata').empty();
      var seleccionado = $(this).html();
      if (seleccionado == "Todos") {
        filtroArea = "";
        
        $('#Seleccionador ul').find("li").slideDown();
        //$("#btnArea:first-child").text($(this).text());
      }
      else {
        filtroArea = seleccionado;
        filtrar();
        //$("#btnArea:first-child").text($(this).text());
      }

    });

    //Filtrado
    function filtrar() {
       $("li a[data-categoria!='" + filtroArea + "']").parent().slideUp();
         $("li a[data-categoria*='" + filtroArea + "']").parent().slideDown();
    }

    jQuery.expr[':'].Contains = function(a,i,m){
    return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };

    //actualizar las búsquedas cuando el texto cambie
      $("#textoBuscar").change(function(){
        //cuando escriba algo
        var filter = $(this).val(); // trae el valor del input
        if (filter) {
        $('#Seleccionador ul').find("a:not(:Contains(" + filter + "))").parent().slideUp();
        $('#Seleccionador ul').find("a:Contains(" + filter + ")").parent().slideDown();
        }else{
          $('#Seleccionador ul').find("li").slideDown();
        }

      }).keyup (function(){
        //cuando cambie una letra
        $(this).change();
      });

    //click en elemento seleccionado --> mostrar pdf
    $('a.info').on('click', function () {
      //event.preventDefault();
      //console.log( event.target ); 
        $('#showdata').html('<p>Título : ' + $(this).attr('data-titulo') + '</p>' +
        '<p>Autores: '+$(this).attr('data-autores')+'</p>'+
        '<p>Categor&iacute;a: ' + $(this).attr('data-categoria') + '</p>' +
        '<p>Tipo: ' + $(this).attr('data-tipo') + '</p>'+
        '<a class="btn btn-info" href="https://drive.google.com/file/d/' + $(this).attr('data-archivo') + '/view">Descargar</a>'
      );
      $('#show').empty();
      $('#show').append('<iframe id="mipdf" src="https://drive.google.com/file/d/' + $(this).attr('data-archivo') + '/preview"></iframe>');
      
    });
    // + '<a class="btn btn-info" href="https://docs.google.com/uc?id=' + $(this).attr('data-archivo') + '&export=download">Descargar</a>\n'

  });
});






