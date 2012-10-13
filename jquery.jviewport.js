/*
  Version 0.4 jViewport
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
   $.jviewport = function(options) {
  
      //Set the Defaults
      var defaults = {
          selector         : 'body',
          position         : 'fixed',
          backgroundColor  : '#333',
          fontSize         : 11,
          textColor        : '#85afc3',
          height           : 25,
          display          : true,
          device           : true
      };
      
      // Extend Options to plugin
      var options = $.extend(defaults, options);

      // set $this to the selector
      var $this = $(options.selector);
      
      // If the display is true, run plugin
      if (options.display) {
        
        // Sets the Selector to some base CSS This makes sure there is room for the plugin without destroying users layout
        $this.css({
          'position': 'relative',
          'padding-bottom' : options.height + 'px'
        });
        
        // Plugin html and inline styles
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

        // Apply it to page
        $pack.appendTo($this);

        // When the window resizes run the math and functions that are to be displayed
        $(window).resize(function() {
  
          var device = null;

          // Calculate site width based on window (might change later, this has proved buggy in some browser)
          function siteWidth() {
            return siteWidth = $(window).width();
          }

          // Get the range of what device it falls under
          function devices(w) {
            if (w < 1400 || w > 1400) {
              device = 'Widescreen';
            }
            if (w < 1280) {
              device = 'Desktop';
            }
            if (w < 1080) {
              device = 'High Definition';
            }
            if (w < 1024) {
              device = 'iPad Landscape';
            }
            if (w < 980) {
              device = 'Kindle Fire Landscape';
            }
            if (w < 768) {
              device = 'iPad Portrait';
            }
            if (w < 600) {
              device = 'Kindle Fire Landscape';
            }
            if (w < 480) {
              device = 'iPhone Landscape';
            }
            if (w < 320) {
              device = 'iPad Portrait';
            }
            if (w < 200) {
              device = 'Too small to worry about'
            }
            return ' (' + device + ')';
          }
  
          // Depending on setting, displays the device name or not
          var output;
          if ( options.device ) { 
            output = 'Window Width: ' + siteWidth()  + 'px' + devices(siteWidth);
          }
          else {
            output = 'Window Width: ' + siteWidth() + 'px';
          }
          
          // Output the text to the plugin's html
          $('.jviewport').text(output);
        }).resize(); // Calls the functions to initialize it at first to prevent double calls.

           
      }
    };

})(jQuery);