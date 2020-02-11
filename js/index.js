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

	// User Input 3 --> Text Box 3
	$(function() {
	  $('#userInput3').on("input", function() {
	    $('#printText3').text($(this).val());
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


	  	$('#print-btn').css('display', 'none');

	  	// Meme Img 1
	  	if (img_id == 'box1') {
	  		
	  		$('#printText1').attr('style', "position: absolute; left: 0%; top: 0%; width: 52%; height: 21.5%; z-index: 1; margin:0;");

	  		$('#printText2').attr('style', "position: absolute; left: 52%; top: 0%; width: 48%; height: 21.5%; z-index: 1; margin: 0;");
	  	};


		// Meme Img 2
	  	if (img_id == 'box2') {
	  		
	  		$('#printText1').attr('style', "position: absolute; left: 30.2%; top: 12.08%; width: 12.4%; height: 23.17%; z-index: 1; margin:0; color:white;");

	  		$('#printText2').attr('style', "position: absolute; left: 46.42%; top: 11.97%; width: 23.29%; height: 23.39%; z-index: 1; margin:0; color:white;");

	  		$('#printText3').attr('style', "display: block; position: absolute; left: 37.19%; top: 58.87%; width: 31.86%; height: 12.75%; z-index: 1; color:white;");

	  		$('#input-3').attr('style', "display: block;" );


	  	};

	  	if (img_id != 'box2') {
	  		
	  		$('#printText3').attr('style', "display: none;")

	  		$('#input-3').attr('style', "display: none;" );

	  	};





	  	// Memem Img 3
	  	if (img_id == 'box3') {
	  		
	  		$('#printText1').attr('style', "position: absolute; left: 3.26%; top: 2.08%; width: 92.06%; height: 14.76%; z-index: 1; color:white;")

	  		$('#printText2').attr('style', "position: absolute; left: 0.58%; top: 88.36%; width: 98.84%; height: 10.64%; z-index: 1;")
	  	};





		// Meme Img 
	  	if (img_id == 'box4') {
	  		
	  		$('#printText1').attr('style', "position: absolute; left: 0.83%; top: 1%; width: 98.25%; height: 10.86%; z-index: 1;");

	  		$('#printText2').attr('style', "position: absolute; left: 0.42%; top: 88.03%; width: 99.08%; height: 11.31%; z-index: 1;");
	  	};


		// Meme Img 5
	  	if (img_id == 'box5') {
	  		
	  		$('#printText1').attr('style', "position: absolute; left: 17.89%; top: 3.99%; width: 64.31%; height: 20.29%; z-index: 1;");

	  		$('#printText2').attr('style', "display: none;");

	  		$('#input-2').attr('style', "display: none;" );
	  	};

	  	if (img_id != 'box5') {
	  		
	  		$('#input-2').attr('style', "display: block;")

	  	};




		// Meme Img 6
	  	if (img_id == 'box6') {
	  		
	  		$('#printText1').attr('style', "position: absolute; left: 0.5%; top: 0.44%; width: 98.92%; height: 10.09%; z-index: 1;");

	  		$('#printText2').attr('style', "position: absolute; left: 0.42%; top: 89.25%; width: 99.17%; height: 9.87%; z-index: 1;");
	  	};


	  	// Memem Img 7
	  	if (img_id == 'box7') {
	  		
	  		$('#printText1').attr('style', "position: absolute; left: 44.53%; top: 1.91%; width: 53.65%; height: 46.35%; z-index: 1;");

	  		$('#printText2').attr('style', "position: absolute; left: 44.4%; top: 52.78%; width: 54.43%; height: 45.66%; z-index: 1;" );
	  	};


	  	// Memem Img 8
	  	if (img_id == 'box8') {
	  		
	  		$('#printText1').attr('style', "position: absolute; left: 42.19%; top: 57.91%; width: 46.48%; height: 25.57%; z-index: 1; transform: rotate(-10deg);");

	  		$('#printText2').attr('style', "display: none;" );

	  		$('#input-2').attr('style', "display: none;" );
	  	};
	  	

	  	// Memem Img 9
	  	if (img_id == 'box9') {
	  		
	  		$('#printText1').attr('style', "position: absolute; left: 0.83%; top: 1%; width: 98.09%; height: 18.85%; z-index: 1;");

	  		$('#printText2').attr('style', "position: absolute; left: 0.42%; top: 82.71%; width: 99.17%; height: 16.08%; z-index: 1;" );
	  	};


	  	// Memem Img 10
	  	if (img_id == 'box10') {
	  		
	  		$('#printText1').attr('style', "position: absolute; left: 13.56%; top: 1%; width: 73.04%; height: 19.51%; z-index: 1; color:white;");

	  		$('#printText2').attr('style', "position: absolute; left: 12.9%; top: 81.6%; width: 73.54%; height: 17.18%; z-index: 1; color:white;" );
	  	};


	  	// $('#meme-img').css("background-image", $(this).css('background-image'));
	    console.log(img_id);
	  });
	});
	


	// NAVIGIATION

	  	$(function() { // DOM ready
	    
	  		console.log('good to go');

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









});