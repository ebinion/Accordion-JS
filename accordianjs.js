(function($){
	$.fn.accordianjs = function() {
		return this.each(function(){
			$(this).children('li').children('a').bind('click', function(e){
					e.preventDefault();
					if( $(this).siblings('ul').hasClass('ajsToggled') === false )
					{
						// Close upen menus
						$('.ajsToggled').removeClass('ajsToggled').slideUp();
						// Open selected Menu
						$(this).siblings('ul').addClass('ajsToggled').slideDown();
					}
					else{
						$(this).siblings('ul').removeClass('ajsToggled').slideUp();
					}
				}
			);
		});
	};
})( jQuery );
