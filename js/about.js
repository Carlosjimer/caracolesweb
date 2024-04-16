$(document).ready(function(){

    //Selector de temas
    let theme = $('#theme');
    $('#to_green').click(function(){
        theme.attr('href', 'css/green.css')
    });
    $('#to_red').click(function(){
        theme.attr('href', 'css/red.css')
    });
    $('#to_blue').click(function(){
        theme.attr('href', 'css/blue.css')
    });

    //Scroll arriba en la web
    $('#up').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });
    //Login falso
    $('#form').submit(function(){
        let form_name = $('#form_name').val();
        localStorage.setItem('form_name', form_name);
    });
    let form_name = localStorage.getItem('form_name');
    if(form_name != null && form_name != 'undefined'){
        $('#contact').html('Bienvenido ' + form_name);
        $('form').hide();
        $('#logout').removeClass('hidden');   
    }
    $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });

        //Acordeon
        $('#accordion').accordion({
            icons: {
                header: "ui-icon-triangle-1-e",
                activeHeader: "ui-icon-triangle-1-s",
            }
        });
  });