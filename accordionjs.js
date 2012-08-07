/*
* AccordionJS
* Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
*
* Author: Ezekiel Binion
* URL: http://ezekielbinion.com
*/

(function($){
	$.fn.accordionjs = function() {
		return this.each(function(){
			$(this).children('li').children('a').bind('click', function(e){
				// If there isn't a drop down menu, treat the link as normal
				if( $(this).siblings('ul').length > 0 ){
					e.preventDefault();
					if( $(this).siblings('ul').hasClass('ajsToggled') === false )
					{
						// Close open menus
						$('.ajsToggled').removeClass('ajsToggled').slideUp();
						// Open selected Menu
						$(this).siblings('ul').addClass('ajsToggled').slideDown();
					}
					else{
						// The menu is already open, let's close this menu
						$(this).siblings('ul').removeClass('ajsToggled').slideUp();
					}
				}
			});
		});
	};
})( jQuery );
