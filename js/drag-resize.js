// CREDIT: https://codepen.io/QDeltaE/pen/VWEyLj


var dragging = false,
    currentDragged;

var resizeHandles = 
    `
<div class="resize nw" id="nw" draggable="false" contenteditable="false"></div>
<div class="resize n" id="n" draggable="false" contenteditable="false"></div>
<div class="resize ne" id="ne" draggable="false" contenteditable="false"></div>
<div class="resize w" id="w" draggable="false" contenteditable="false"></div>
<div class="resize e" id="e" draggable="false" contenteditable="false"></div>
<div class="resize sw" id="sw" draggable="false" contenteditable="false"></div>
<div class="resize s" id="s" draggable="false" contenteditable="false"></div>
<div class="resize se" id="se" draggable="false" contenteditable="false"></div>`;

var resizing = false,
    currentResizeHandle,
    sX,
    sY;

var mousedownEventType = ((document.ontouchstart!==null)?'mousedown':'touchstart'),
    mousemoveEventType = ((document.ontouchmove!==null)?'mousemove':'touchmove'),
    mouseupEventType = ((document.ontouchmove!==null)?'mouseup':'touchend');

$('.draggable')
.on(mousedownEventType, function(e){
  if (!e.target.classList.contains("resize") && !resizing) {
    currentDragged = $(this);
    dragging = true;
    sX = e.pageX;
    sY = e.pageY;
  }
});

$(".resizable")
.focus(function(e){
  $(this).html($(this).html() + resizeHandles);
  $(".resize").on(mousedownEventType, function(e){
    currentResizeHandle = $(this);
    resizing = true;
    sX = e.pageX;
    sY = e.pageY;
  });
})
.blur(function(e){
  $(this).children(".resize").remove();
});

$("body").on(mousemoveEventType, function(e) {
  var xChange = e.pageX - sX,
      yChange = e.pageY - sY;
  if (resizing) {
    e.preventDefault();
    
    var parent  = currentResizeHandle.parent();
    
    switch (currentResizeHandle.attr('id')) {
      case "nw":
        var newWidth = parseFloat(parent.css('width')) - xChange,
            newHeight = parseFloat(parent.css('height')) - yChange,
            newLeft = parseFloat(parent.css('margin-left')) + xChange,
            newTop = parseFloat(parent.css('margin-top')) + yChange;
        break;
      case "n":
        var newWidth = parseFloat(parent.css('width')),
            newHeight = parseFloat(parent.css('height')) - yChange,
            newLeft = parseFloat(parent.css('margin-left')),
            newTop = parseFloat(parent.css('margin-top')) + yChange;
        break;
      case "ne":
        var newWidth = parseFloat(parent.css('width')) + xChange,
            newHeight = parseFloat(parent.css('height')) - yChange,
            newLeft = parseFloat(parent.css('margin-left')),
            newTop = parseFloat(parent.css('margin-top')) + yChange;
        break;
      case "e":
        var newWidth = parseFloat(parent.css('width')) + xChange,
            newHeight = parseFloat(parent.css('height')),
            newLeft = parseFloat(parent.css('margin-left')),
            newTop = parseFloat(parent.css('margin-top'));
        break;
      case "w":
        var newWidth = parseFloat(parent.css('width')) - xChange,
            newHeight = parseFloat(parent.css('height')),
            newLeft = parseFloat(parent.css('margin-left')) + xChange,
            newTop = parseFloat(parent.css('margin-top'));
        break;
      case "sw":
        var newWidth = parseFloat(parent.css('width')) - xChange,
            newHeight = parseFloat(parent.css('height')) + yChange,
            newLeft = parseFloat(parent.css('margin-left')) + xChange,
            newTop = parseFloat(parent.css('margin-top'));
        break;
      case "s":
        var newWidth = parseFloat(parent.css('width')),
            newHeight = parseFloat(parent.css('height')) + yChange,
            newLeft = parseFloat(parent.css('margin-left')),
            newTop = parseFloat(parent.css('margin-top'));
        break;
      case "se":
        var newWidth = parseFloat(parent.css('width')) + xChange,
            newHeight = parseFloat(parent.css('height')) + yChange,
            newLeft = parseFloat(parent.css('margin-left')),
            newTop = parseFloat(parent.css('margin-top'));
        break;
    }
    //Width
    var containerWidth = parseFloat(parent.parent().css("width"));
    
    if (newLeft < 0) {
      newWidth += newLeft;
      newLeft = 0;
    }
    if (newWidth < 0) {
      newWidth = 0;
      newLeft = parent.css("margin-left");
    }
    if (newLeft + newWidth > containerWidth) {
      newWidth = containerWidth-newLeft;
    }
    
    parent
      .css('margin-left', newLeft + "px")
      .css('width', newWidth + "px");
    sX = e.pageX;

    //Height
    var containerHeight = parseFloat(parent.parent().css("height"));
    
    if (newTop < 0) {
      newHeight += newTop;
      newTop = 0;
    }
    if (newHeight < 0) {
      newHeight = 0;
      newTop = parent.css("margin-top");
    }
    if (newTop + newHeight > containerHeight) {
      newHeight = containerHeight-newTop;
    }
    
    parent
      .css('margin-top', newTop + "px")
      .css('height', newHeight + "px");
    sY = e.pageY;
    
  } else if (dragging) {
    e.preventDefault();
    
    var draggedWidth = parseFloat(currentDragged.css("width")),
        draggedHeight = parseFloat(currentDragged.css("height")),
        containerWidth = parseFloat(currentDragged.parent().css("width")),
        containerHeight = parseFloat(currentDragged.parent().css("height"));
    
    var newLeft = (parseFloat(currentDragged.css("margin-left")) + xChange),
        newTop = (parseFloat(currentDragged.css("margin-top")) + yChange);
    
    if (newLeft < 0) {
      newLeft = 0;
    }
    if (newTop < 0) {
      newTop = 0;
    }
    if (newLeft + draggedWidth > containerWidth) {
      newLeft = containerWidth - draggedWidth;
    }
    if (newTop + draggedHeight > containerHeight) {
      newTop = containerHeight - draggedHeight;
    }
    
    currentDragged
      .css("margin-left", newLeft + "px")
      .css("margin-top", newTop + "px");
    sX = e.pageX;
    sY = e.pageY;
    
  }
})
.on(mouseupEventType, function(e){
  dragging = false;
  resizing = false;
});