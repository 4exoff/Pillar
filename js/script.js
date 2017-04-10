$('document').ready(function(){
	
	
	setInterval(function(){
		
		 $('#ImgSlide6').attr('src', $('#ImgSlide1').attr('src'));
		 $('#ImgSlide1').attr('src', $('#ImgSlide2').attr('src'));
		 $('#ImgSlide2').attr('src', $('#ImgSlide3').attr('src'));
		 $('#ImgSlide3').attr('src', $('#ImgSlide4').attr('src'));
		 $('#ImgSlide4').attr('src', $('#ImgSlide5').attr('src'));
		 $('#ImgSlide5').attr('src', $('#ImgSlide6').attr('src'));
		 
	},4000);	
      
	$('#link1').on('click', function () {
	    $('#Pict1').css({ "opacity": "1", "background": "url('../img/work7-1024x768.jpg') no-repeat center", "background-size": "cover", "width": "33.33%", "height": "330px" });
	    $('#Pict2').css({ "opacity": "1", "background": "url('../img/work6-1024x768.jpg') no-repeat center", "background-size": "cover", "width": "33.33%", "height": "330px" });
	    $('#Pict3').css({ "opacity": "1", "background": "url('../img/work1-1024x768.jpg') no-repeat center", "background-size": "cover", "width": "33.33%", "height": "330px" });
	    $('#Pict4').css({ "opacity": "1", "background": "url('../img/work2-1024x768.jpg') no-repeat center", "background-size": "cover", "width": "33.33%", "height": "330px" });
	    $('#Pict5').css({ "opacity": "1", "background": "url('../img/work3-1024x768.jpg') no-repeat center", "background-size": "cover", "width": "33.33%", "height": "330px" });
	    $('#Pict6').css({ "opacity": "1", "background": "url('../img/work4-1024x768.jpg') no-repeat center", "background-size": "cover", "width": "33.33%", "height": "330px" });
    });
	$('#link2').on('click', function () {
	    $('#Pict1').css({ "opacity": "1", "background": "url('../img/work7-1024x768.jpg') no-repeat center", "background-size": "cover", "width": "33.33%", "height": "330px" });
	    $('#Pict2').css({ "opacity": "1", "background": "url('../img/work3-1024x768.jpg') no-repeat center", "background-size": "cover", "width": "33.33%", "height": "330px" });
	    $('#Pict3').css({ "opacity": "0", "width": "0", "height": "0" });
	    $('#Pict4').css({ "opacity": "0", "width": "0", "height": "0" });
	    $('#Pict5').css({ "opacity": "0", "width": "0", "height": "0" });
	    $('#Pict6').css({ "opacity": "0", "width": "0", "height": "0" });
	});
	$('#link3').on('click', function () {
	    $('#Pict1').css({ "opacity": "1", "background": "url('../img/work6-1024x768.jpg') no-repeat center", "background-size": "cover", "width": "33.33%", "height": "330px" });
	    $('#Pict2').css({ "opacity": "1", "background": "url('../img/work2-1024x768.jpg') no-repeat center", "background-size": "cover", "width": "33.33%", "height": "330px" });
	    $('#Pict3').css({ "opacity": "1", "background": "url('../img/work4-1024x768.jpg') no-repeat center", "background-size": "cover", "width": "33.33%", "height": "330px" });
	    $('#Pict4').css({ "opacity": "0", "width": "0", "height": "0" });
	    $('#Pict5').css({ "opacity": "0", "width": "0", "height": "0" });
	    $('#Pict6').css({ "opacity": "0", "width": "0", "height": "0" });
	});
	$('#link4').on('click', function () {
	    $('#Pict1').css({ "opacity": "1", "background": "url('../img/work1-1024x768.jpg') no-repeat center", "background-size": "cover", "width": "33.33%", "height": "330px" });
	    $('#Pict2').css({ "opacity": "0", "width": "0", "height": "0" });
	    $('#Pict3').css({ "opacity": "0", "width": "0", "height": "0" });
	    $('#Pict4').css({ "opacity": "0", "width": "0", "height": "0" });
	    $('#Pict5').css({ "opacity": "0", "width": "0", "height": "0" });
	    $('#Pict6').css({ "opacity": "0", "width": "0", "height": "0" });
	});
});