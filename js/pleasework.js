$(document).ready(function() { 
          
            // Global variable 
            var element = $("#canvas-container");  
          
            // Global variable 
            var getCanvas;  
  
            $("#screenshot-btn").on('click', function() { 
                html2canvas(element, { 
                    onrendered: function(canvas) { 
                        $("#previewImage").append(canvas); 
                        getCanvas = canvas; 
                    } 
                }); 
            }); 
  
            $("#btn-Convert-Html2Image").on('click', function() { 
                var imgageData =  
                    getCanvas.toDataURL("image/png"); 
              
                // Now browser starts downloading  
                // it instead of just showing it 
                var newData = imgageData.replace( 
                /^data:image\/png/, "data:application/octet-stream"); 
              
                $("#btn-Convert-Html2Image").attr( 
                "download", "GeeksForGeeks.png").attr( 
                "href", newData); 
            }); 
        });