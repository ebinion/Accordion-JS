/*
* AccordionJS
* Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
*
* Author: Ezekiel Binion
* URL: http://ezekielbinion.com
*/(function(e){e.fn.accordionjs=function(){return this.each(function(){e(this).children("li").children("a").bind("click",function(t){if(e(this).siblings("ul").length>0){t.preventDefault();if(e(this).siblings("ul").hasClass("ajsToggled")===!1){e(".ajsToggled").removeClass("ajsToggled").slideUp();e(this).siblings("ul").addClass("ajsToggled").slideDown()}else e(this).siblings("ul").removeClass("ajsToggled").slideUp()}})})}})(jQuery);