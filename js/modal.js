    // MODAL FOR PREVIEW

    // Get the modal
	var modal = document.getElementById("myModal");

	// Get the button that opens the modal
	var btn = document.getElementById("preview-btn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	  modal.style.display = "block";


	  getPreview();

	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}





	//SCREENSHOT OF THE IMG
	
	// Global variable 
    var element = $("#canvas-container");  
  
    // Global variable 
    var getCanvas;  

       
	function getPreview() { 
        
    	$('#previewImage').html("");

    	$(".text-box").css('border', 'none');

    	// $('#print-btn').css('display', 'block');
    	// $(".meme-text").css('color', 'black');
    	// $(".meme-text").css('-webkit-text-stroke', '1px black');


        html2canvas($("#canvas-container"), { 
            onrendered: function(canvas) { 
                $('#previewImage').append(canvas); 
                
                getCanvas = canvas; 
            } 
        }); 
    

        $(".text-box").css('border', '2px dotted gray');

    };