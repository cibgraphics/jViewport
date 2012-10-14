/*
  Version 0.4.1 jViewport
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


(function(a){a.jviewport=function(b){var c={selector:"body",position:"fixed",backgroundColor:"#333",fontSize:11,textColor:"#85afc3",height:25,display:true,device:true};var b=a.extend(c,b);var d=a(b.selector);if(b.display){d.css({position:"relative","padding-bottom":b.height+"px"});$pack=a('<div class="jviewport"/>').css({position:b.position,height:b.height+"px",background:b.backgroundColor,"text-align":"center","font-size":b.fontSize+"px",color:b.textColor,bottom:"0",width:"100%","line-height":b.height+"px","font-family":"Arial","text-transform":"none","letter-spacing":0});$pack.appendTo(d);a(window).resize(function(){function d(){return d=a(window).width()}function e(a){if(a<=1400||a>1400){c="Widescreen"}if(a<=1280){c="Desktop"}if(a<=1080){c="High Definition"}if(a<=1024){c="iPad Landscape"}if(a<=980){c="Kindle Fire Landscape"}if(a<=768){c="iPad Portrait"}if(a<=600){c="Kindle Fire Portrait"}if(a<=480){c="iPhone Landscape"}if(a<=320){c="iPhone Portrait"}if(a<=200){c="Too small to worry about"}return" ("+c+")"}var c=null;var f;if(b.device){f="Window Width: "+d()+"px"+e(d)}else{f="Window Width: "+d()+"px"}a(".jviewport").text(f)}).resize()}}})(jQuery)