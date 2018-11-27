
function hoverVideo(e) {
    this.$elm = $(e);
    this.player = this.$elm.find("video")[0];
    var t = this;
   
    this.$elm.on("mouseenter touchstart", function(e) {
    	e.preventDefault();
        t.player.play()
    }),
    this.$elm.on("mouseleave touchend", function(e) {
    	e.preventDefault();
        t.player.pause()
    })
}


$(document).ready(function(){


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(".video-container.sm").each(function(e, t) {
            new hoverVideo(t)
        })

 $(".back-to-top").click(function(e){ e.preventDefault(); $('html,body').animate({ scrollTop: 0 }, 'slow'); return false; });


$(".button-nav").click(function(){
	$(".navbar-collapse").toggleClass('active');
	$('.button-nav').toggleClass('is-active');
	$("body").toggleClass("noscroll");
});

$(".nav-link").click(function(e){
	$(".navbar-collapse").removeClass('active');
	$('.button-nav').removeClass('is-active');
	setTimeout(function(){$("body").removeClass('noscroll');},150);
})

$(".work-link").click(function(e){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 110
    }, 500);
})

$(".credits-link").click(function(e){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
})

});
