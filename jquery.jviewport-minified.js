/*
  Version 0.5 jViewport
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


(function(e){e.jviewport=function(t){var n={selector:"body",position:"fixed",backgroundColor:"#333",fontSize:11,textColor:"#85afc3",height:25,display:true,device:true};var t=e.extend(n,t);var r=e(t.selector);if(t.display){function i(){var t=e('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');e("body").append(t);var n=e("div",t).innerWidth();t.css("overflow-y","scroll");var r=e("div",t).innerWidth();e(t).remove();return n-r}e("html, body").css("-webkit-transform-style","flat");r.css({position:"relative","padding-bottom":t.height+"px"});$pack=e('<div class="jviewport"/>').css({position:t.position,height:t.height+"px",background:t.backgroundColor,"text-align":"center","font-size":t.fontSize+"px",color:t.textColor,bottom:"0",width:"100%","line-height":t.height+"px","font-family":"Veranda, Arial, Helvetica, sans-serif","text-transform":"none","letter-spacing":0});$pack.appendTo(r);e(window).resize(function(){function r(){if(e(window).height()<e(document).height()){return r=e(window).width()+i()}else{return r=e(window).width()}}function s(e){if(e>2e3){n="Seriously? What are you testing for?"}if(e<=1400||e<2e3){n="Widescreen"}if(e<=1280){n="Desktop"}if(e<=1080){n="High Definition"}if(e<=1024){n="iPad Landscape"}if(e<=768){n="iPad Portrait"}if(e<=600){n="Kindle Fire Portrait"}if(e<=480){n="iPhone Landscape"}if(e<=320){n="iPhone Portrait"}if(e<=200){n="Too small to worry about"}return" ("+n+")"}html=e("html");body=e(t.selector);htmlMargin=html.css("margin-left").replace("px","");htmlpadding=html.css("padding-left").replace("px","");bodyMargin=body.css("margin-left").replace("px","");bodypadding=body.css("padding-left").replace("px","");htmlLeft=parseFloat(htmlMargin)+parseFloat(htmlpadding);bodyLeft=parseFloat(bodyMargin)+parseFloat(bodypadding);leftNum=htmlLeft+bodyLeft;e(".jviewport").css("margin-left","-"+Math.ceil(leftNum)+"px");var n=null;var o;if(t.device){o="Window Width: "+r()+"px"+s(r)}else{o="Window Width: "+r()+"px"}e(".jviewport").text(o)}).resize()}}})(jQuery)