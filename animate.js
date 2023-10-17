gsap.from('.top',{duration:0, opacity:0, ease: "back.out(1.4)"});
gsap.from('.daw',{duration:2, scale: 0.6,opacity:0, ease:"back.out(3)"});
gsap.from('.Welcome',{duration:1, y:"5vw", scaleY: 0.2, opacity:0,ease: "back.out(1.4)"});
gsap.from('.det', {duration:1, delay: 0.5 ,y:"5vw", scaleY: 0.2, opacity:0,ease: "back.out(1.4)"});

$(document).ready(function(){
    $('.top').click(function(){
        $('html, body').animate({
            scrollTop: 0
        },1000);
    });
    
    // $(window).scroll(function(e){
    //     var scroll = $(window).scrollTop();
    //     if ($('.daw').css('height') > 100){
    //         $('.daw').animate({
    //         height: (200 - (scroll*2)),
    //         width: (120 - scroll),
    //         'background-size': (133-scroll),
    //     }, 'fast')
    //     }else{
    //         $('.daw').animate({
    //             'position': 'sticky',
    //             'top': scroll-20,
    //         },200)
    //     }
    // })
})
