$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

jQuery(document).ready(function() {

	jQuery(window).scroll(function(){
		
		 windowHeight = jQuery(window).height();
		 windowScrollPosTop = jQuery(window).scrollTop();
		 windowScrollPosBottom = windowHeight + windowScrollPosTop;
		
		jQuery(".animate-left").revealOnScroll("left");
		jQuery(".animate-right").revealOnScroll("right");
        jQuery(".animate-middle").revealOnScroll("middle");
        
	});
	
	jQuery.fn.revealOnScroll = function(effect){
		
		return this.each(function(){

			var objectOffset = jQuery(this).offset();
			var objectOffsetTop = objectOffset.top;
		    var visible=0;
			
			if(effect == "right" && !jQuery(this).hasClass("visible"))
			{
				jQuery(this).css({
					"right":"-200px",
					"opacity":0,
					"position": "relative"
				});
			}
			if(effect == "left" && !jQuery(this).hasClass("visible"))
			{
				jQuery(this).css({
					"right":"200px",
					"opacity":0,
					"position": "relative"
				});
			}
			if( effect == "middle" && !jQuery(this).hasClass("visible"))
			{
				jQuery(this).css({
					"opacity":0
				});
			}
			if(!jQuery(this).hasClass("visible"))
			{
				if(objectOffsetTop < windowScrollPosBottom)
				{
					if(effect == "opacity")
					{
						jQuery(this).animate({"opacity" : 1},1500).addClass("visible");
					}
					else
					{
						jQuery(this).animate({"opacity":1,"right":0},1500).addClass("visible");
					}
				}
			}
		});
	};
	

});