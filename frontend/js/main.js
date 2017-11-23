var handler = {
	
	imageDictionary: {
		0:"img/candleoff.gif", 		
		1:"img/candleoff.gif", 
		2:"img/candleoff.gif",
		3:"img/candle-anim.gif",
		4:"img/candleoff.gif"
	},
	
	processEvent: function (event) {
		console.log(event);
		console.log(this.imageDictionary[2]);
		var tiltX =  Math.round( event.beta / 90 ) + 2; 
		var tiltY =  Math.round( event.gamma );
		//$('#message').html(this.imageDictionary[tiltX]);
		$('#candle-img').attr('src',this.imageDictionary[tiltX]);
		$('#message').html('TiltX: '+tiltX+' TiltY: '+tiltY+' Image: '+this.imageDictionary[tiltX])
	}
};


(function() {
	
if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function () {
		handler.processEvent(event);
    }, true);
} else if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function () {
		handler.processEvent(event);
    }, true);
} else {
    window.addEventListener("MozOrientation", function () {
		handler.processEvent(event);
    }, true);
}

})();
