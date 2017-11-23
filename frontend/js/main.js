var handler = {
	
	imageDictionary: {
		0:"img/candleoff.gif", 		
		1:"img/candleon.gif", 
		2:"img/candleon.gif"
	},
	
	processEvent: function (event) {
		console.log(event);
		console.log(this.imageDictionary[2]);
		//$('#message').html(event.alpha+' '+event.beta+' '+event.gamma)
		var tiltX =  Math.round( event.beta );
		var tiltY =  Math.round( event.gamma );
		$('#message').html(this.imageDictionary[tiltX]);
		$('#candle-img').attr('src',this.imageDictionary[ Math.round(tiltX/90 % 2)]);
		$('#message').html(tiltX+' '+tiltY)
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
