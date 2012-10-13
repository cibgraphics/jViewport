/*
  Version 0.3 jViewport
	Copyright (c) 2012 Christopher Bishop, www.cibgraphics.com Cibgraphics Design Studio
	
	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:
	
	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

;(function($)
 {
   $.jviewport = function(options) 
    {
       var defaults = {
         selector         : 'body',
         position         : 'fixed',
         backgroundColor  : '#333',
         fontSize         : 11,
         textColor        : '#85afc3',
         height           : 25,
         display          : true,
         
       };
       var options = $.extend(defaults, options);
       
       var $this = $(options.selector);
       
       if (options.display) {
         $this.css({
           'position': 'relative',
           'padding-bottom' : options.height + 'px'
         });

        $pack  = $('<div class="jviewport"/>').css({
            'position' : options.position,
            'height' : options.height + 'px',
            'background' : options.backgroundColor,
            'text-align' : 'center',
            'font-size' : options.fontSize + 'px',
            'color': options.textColor,
            'bottom' : '0',
            'width': '100%',
            'line-height': options.height + 'px',
            'font-family': 'Arial',
            'text-transform' : 'none',
            'letter-spacing': 0
           });

           $pack.appendTo($this);

           var siteWidth = $(window).width();
           $(window).resize(function() {
             var siteWidth = $('html').width();
             $('.jviewport').text('Window Width: ' + siteWidth + ' px');
           });

           $('.jviewport').text('Window Width: ' + siteWidth + ' px');
        }
    };

})(jQuery);