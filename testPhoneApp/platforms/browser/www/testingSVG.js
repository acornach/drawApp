
var draw = SVG('drawing').size(1000, 1000);


var flag = 0;
var element = draw;
element.on("mousedown", function(){
	var rect = draw.rect(20, 20).fill('#f06').attr({
   	 x: event.pageX,
    	y: event.pageY
  });
   element.on("mousemove", function(){
		console.log(flag++);

	}, false);

}, false);

element.on("mouseup", function(){
    element.off("mousemove");
        //alert("click");
}, false);




