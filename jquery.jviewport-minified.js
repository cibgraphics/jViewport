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


(function(a){a.jviewport=function(b){var c={selector:"body",position:"fixed",backgroundColor:"#333",fontSize:11,textColor:"#6a9233",height:"25",display:true};var b=a.extend(c,b);var d=a(b.selector);if(b.display){d.css({position:"relative","padding-bottom":b.height+"px"});$pack=a('<div class="jviewport"/>').css({position:b.position,height:b.height+"px",background:b.backgroundColor,"text-align":"center","font-size":b.fontSize+"px",color:b.textColor,bottom:"0",width:"100%","line-height":b.height+"px","font-family":"Arial","text-transform":"none","letter-spacing":0});$pack.appendTo(d);var e=a(window).width();a(window).resize(function(){var b=a("html").width();a(".jviewport").text("Window Width: "+b+" px")});a(".jviewport").text("Window Width: "+e+" px")}}})(jQuery)