/*
* AccordionJS
* Author: Ezekiel Binion
* URL: http://ezekielbinion.com
*
Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php 
*/

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
