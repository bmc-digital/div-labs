$(document).ready(function(){


	// User Input 1 --> Text Box 1
	$(function() {
	  $('#userInput1').on("input", function() {
	    $('#printText1').text($(this).val());
	  });
	});


	// User Input 2 --> Text Box 2
	$(function() {
	  $('#userInput2').on("input", function() {
	    $('#printText2').text($(this).val());
	  });
	});


	$(function() {
	  $('.scroll-box').on('click', function() {
	    
	  	$('#meme-img').css("background-image", $(this).css('background-image'));
	    console.log($(this).css('background-image'));
	  });
	});


	$(function() {
	  $('.scroll-box').on('click', function() {
	    
	  	var img_id = $(this).attr('id')


	  	// Meme Img 1
	  	if (img_id == 'box1') {
	  		
	  		$('#printText1').attr('style', "left: 50.44%; top: 0%; width: 49.41%; height: 22.83%; z-index: 1;")

	  		$('#printText2').attr('style', "position: absolute; left: 0%; top: 0%; width: 50.15%; height: 21.92%; z-index: 1;")
	  	};


		// Meme Img 2
	  	if (img_id == 'box2') {
	  		
	  		$('#printText1').attr('style', "margin-left: 151px; width: 67px; margin-top: 46px; height: 91px;")

	  		$('#printText2').attr('style', "margin-left: 273px; margin-top: 49px; width: 80px; height: 87px;")
	  	};


	  	// Memem Img 3
	  	if (img_id == 'box3') {
	  		
	  		$('#printText1').attr('style', "margin-left: 1px; margin-top: 2px; width: 506px; height: 59px;")

	  		$('#printText2').attr('style', "margin-left: 6px; margin-top: 310px; width: 501px; height: 76px;" )
	  	};


		// Meme Img 
	  	if (img_id == 'box4') {
	  		
	  		$('#printText1').attr('style', "margin-left: 0px; width: 514px; margin-top: 2px; height: 48px;");

	  		$('#printText2').attr('style', "margin-left: 0px; margin-top: 334px; width: 514px; height: 53px;");
	  	};


		// Meme Img 5
	  	if (img_id == 'box5') {
	  		
	  		$('#printText1').attr('style', "margin-left: 94px; margin-top: 2px; width: 322px; height: 96px;");

	  		$('#printText2').attr('style', "margin-left: 224px; margin-top: 166px; width: 130px; height: 52px;");
	  	};



		// Meme Img 6
	  	if (img_id == 'box6') {
	  		
	  		$('#printText1').attr('style', "margin-left: 0px; width: 514px; margin-top: 2px; height: 71px;");

	  		$('#printText2').attr('style', "margin-left: 7px; margin-top: 292px; width: 491px; height: 86px;");
	  	};


	  	// Memem Img 7
	  	if (img_id == 'box7') {
	  		
	  		$('#printText1').attr('style', "margin-left: 225px; margin-top: 3px; width: 282px; height: 188px;");

	  		$('#printText2').attr('style', "margin-left: 223px; margin-top: 199px; width: 282px; height: 186px;" );
	  	};


	  	// Memem Img 8
	  	if (img_id == 'box8') {
	  		
	  		$('#printText1').attr('style', "margin-left: 217px; margin-top: 229px; width: 223px; height: 102px; transform: rotate(-10deg);");

	  		$('#printText2').attr('style', "margin-left: 61px; margin-top: 2px; width: 297px; height: 41px;" );
	  	};
	  	

	  	// Memem Img 9
	  	if (img_id == 'box9') {
	  		
	  		$('#printText1').attr('style', "margin-left: 3px; width: 505px; margin-top: 4px; height: 73px;");

	  		$('#printText2').attr('style', "margin-left: 2px; margin-top: 312px; width: 506px; height: 75px;" );
	  	};


	  	// Memem Img 10
	  	if (img_id == 'box10') {
	  		
	  		$('#printText1').attr('style', "margin-left: 62px; width: 387px; margin-top: 4px; height: 93px;");

	  		$('#printText2').attr('style', "margin-left: 63px; margin-top: 313px; width: 383px; height: 65px;" );
	  	};


	  	// $('#meme-img').css("background-image", $(this).css('background-image'));
	    console.log(img_id);
	  });
	});
	

(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready

})

(jQuery); // end jQuery



});