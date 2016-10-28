  $(document).ready(function(){
    var floracion = $("#contenido-flor");
    var variedades = $("#contenido-var");
    var portainjertos = $("#contenido-inj, #cuadro-injertos");

    $(".button-collapse").sideNav();
    $('.slider').slider({full_width: true});
       // Pause slider
  $('.slider').slider('pause');
  // Start slider
  $('.slider').slider('start');
  // Next slide
  $('.slider').slider('next');
  // Previous slide
  $('.slider').slider('prev');
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    //Close Modal
    $('#modal1').closeModal();
    //mostrar productos
    $("#variedades").click(function(){
        variedades.toggle(
          function(e){
            this.fadeIn();
            floracion.fadeOut();
            portainjertos.fadeOut();
          },
          function(e){
            floracion.fadeOut();
            portainjertos.fadeOut();
          })
    });
    $("#floracion").click(function(){
        floracion.toggle(
          function(e){
            this.fadeIn();
            variedades.fadeOut();
            portainjertos.fadeOut();
          },
          function(e){
            variedades.fadeOut();
            portainjertos.fadeOut(000);
          })
    });
    $("#portainjertos").click(function(){
        portainjertos.toggle(
          function(e){
            this.fadeIn();
            floracion.fadeOut();
            variedades.fadeOut();
          },
          function(e){
            floracion.fadeOut();
            variedades.fadeOut();
          })
    });
});