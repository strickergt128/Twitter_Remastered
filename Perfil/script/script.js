$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('ul.tabs').tabs();
    $(".dropdown-button").dropdown();
    var  hora_pueblicacion = moment().startOf('hour').fromNow();;;
    $('#fecha').text("Publicado: " + hora_pueblicacion);
  });
