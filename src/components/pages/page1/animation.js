import $ from 'jquery';

$(document).ready(function(){        
    $("#container-1").css({bottom: 30, right: 30, position:'relative'});
    
    $('#container-1').on('click',function(){
        $("#container-1").css('opacity', '1');
        $("#container-2 #Ellipse path:last-child").css('fill-opacity', '0.5');
        $("#container-3 #Ellipse path:last-child").css('fill-opacity', '0.5');
        $("#container-4 #Ellipse path:last-child").css('fill-opacity', '0.5');
        $("#container-1").css({bottom: 30, right: 30, position:'relative'});
        $("#container-2").css({bottom: 0, left: 0, position:'relative'});
        $("#container-3").css({top: 0, right: 0, position:'relative'});
        $("#container-4").css({top: 0, left: 0, position:'relative'});
        $('.diagram').css('border-radius', '50px 0 0 0')
        $('.diagram').css('border-top', '19px solid transparent')
        $('.diagram').css('border-left', '19px solid transparent')
        $('.diagram').css('border-bottom', 'none')
        $('.diagram').css('border-right', 'none')
        $('.diagram').css('background', 'linear-gradient(186deg, #3E66FB, #fdfdfd) border-box')
        $('.description').css({top: 75, left: -34, position:'absolute'});
        $(".title").css({top: 0, left: 0, position:'relative'});            
        $('.detail').css({left: 0, top:0, position:'absolute'});
        $('.policy-container').css('flex-direction', 'initial')
        $(".title").css('text-align', 'left');
    });

    $('#container-2').on('click',function(){
        $("#container-1").css('opacity', '0.5');
        $("#container-2 #Ellipse path:last-child").css('fill-opacity', '0');
        $("#container-3 #Ellipse path:last-child").css('fill-opacity', '0.5');
        $("#container-4 #Ellipse path:last-child").css('fill-opacity', '0.5');

        $("#container-1").css({bottom: 0, right: 0, position:'relative'});
        $("#container-2").css({bottom: 30, left: 30, position:'relative'});
        $("#container-3").css({top: 0, right: 0, position:'relative'});
        $("#container-4").css({top: 0, left: 0, position:'relative'});    
        $('.diagram').css('border-radius', '0 50px 0 0')
        $('.diagram').css('border-top', '19px solid transparent')
        $('.diagram').css('border-right', '19px solid transparent')
        $('.diagram').css('border-bottom', 'none')
        $('.diagram').css('border-left', 'none')
        $('.diagram').css('background', 'linear-gradient(186deg, #3E66FB, #fdfdfd) border-box') 
        $('.description').css({top: 75, left: 267, position:'absolute'}); 
        $('.policy-container').css('flex-direction', 'row-reverse')
        $(".title").css('text-align', 'right');
        $(".title").css({top: 0, left: 0, position:'relative'});
        $('.detail').css({left: 720, top:0, position:'absolute'});
    });

    $('#container-3').on('click',function(){
        $("#container-1").css('opacity', '0.5');
        $("#container-2 #Ellipse path:last-child").css('fill-opacity', '0.5');
        $("#container-3 #Ellipse path:last-child").css('fill-opacity', '0');
        $("#container-4 #Ellipse path:last-child").css('fill-opacity', '0.5');
        $("#container-1").css({bottom: 0, right: 0, position:'relative'});
        $("#container-2").css({bottom: 0, left: 0, position:'relative'});
        $("#container-3").css({top: 30, right: 30, position:'relative'});
        $("#container-4").css({top: 0, left: 0, position:'relative'});
        $('.diagram').css('border-radius', '0 0 0 50px')
        $('.diagram').css('border-bottom', '19px solid transparent')
        $('.diagram').css('border-left', '19px solid transparent')
        $('.diagram').css('border-top', 'none')
        $('.diagram').css('border-right', 'none')
        $('.diagram').css({background: 'linear-gradient(-20deg, #3E66FB, #fdfdfd) border-box'})
        $('.description').css({top: -40, left: -34, position:'absolute'});
        $(".title").css({top: 550, left: 0, position:'relative'});
        $(".title").css('text-align', 'left');
        $('.detail').css({left: 0, top:40, position:'absolute'});
        $('.policy-container').css('flex-direction', 'initial')
    });

    $('#container-4').on('click',function(){
        $("#container-1").css('opacity', '0.5');
        $("#container-2 #Ellipse path:last-child").css('fill-opacity', '0.5');
        $("#container-3 #Ellipse path:last-child").css('fill-opacity', '0.5');
        $("#container-4 #Ellipse path:last-child").css('fill-opacity', '0');
        $("#container-1").css({bottom: 0, right: 0, position:'relative'});
        $("#container-2").css({bottom: 0, left: 0, position:'relative'});
        $("#container-3").css({top: 0, right: 0, position:'relative'});
        $("#container-4").css({top: 30, left: 30, position:'relative'});
        $('.diagram').css('border-radius', '0 0 50px 0')
        $('.diagram').css('border-bottom', '19px solid transparent')
        $('.diagram').css('border-right', '19px solid transparent')
        $('.diagram').css('border-top', 'none')
        $('.diagram').css('border-left', 'none')
        $('.diagram').css('background', 'linear-gradient(-20deg, #3E66FB, #fdfdfd) border-box') 
        $('.description').css({top: -40, left: 267, position:'absolute'}); 
        $('.policy-container').css('flex-direction', 'row-reverse')
        $(".title").css('text-align', 'right');
        $(".title").css({top: 550, left: 0, position:'relative'});
        $('.detail').css({left: 720, top:40, position:'absolute'});
    });

 });