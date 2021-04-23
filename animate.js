gsap.from('.top',{duration:1, y:'-200%', ease: "bounce.out"});
gsap.fromTo('.time', {rotation:600,scale:0}, {duration:3, delay:1, rotation:0, scale:1});
gsap.from('.daw',{duration:2, delay:2, opacity:0});
gsap.from('.Welcome',{duration:2, x:"-100vw", delay:1.5, ease: "elastic.out"});
gsap.from('.det', {duration:2, x: '100vw', delay: 1.5});
gsap.from('.month', {delay: 1,duration: 2,scale:0, opacity:0, ease: 'bounce.out'})
gsap.from('.mname', {delay: 1, duration: 2, x: "-50%", opacity: 0})

$(document).ready(function(){
    $('.top').click(function(){
        $('html, body').animate({
            scrollTop: 0
        },1000);
    });
    
    $(window).scroll(function(e){
        var scroll = $(window).scrollTop()
        console.log($('.daw').css('height'))
        if ($('.daw').css('height') > 100){
            $('.daw').animate({
            height: (200 - (scroll*2)),
            width: (120 - scroll),
            'background-size': (133-scroll),
        }, 'fast')
        }else{
            $('.daw').animate({
                'position': 'sticky',
                'top': scroll-20,
            },200)
        }
    })
})
