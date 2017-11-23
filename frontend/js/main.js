var handler = {
	
	imageDictionary: {
		0:"img/candleon.gif", 		
		1:"img/candleoff.gif", 
		2:"img/candleoff.gif"
	},
	
	processEvent: function (event) {
		console.log(event);
		console.log(this.imageDictionary[2]);
		//$('#message').html(event.alpha+' '+event.beta+' '+event.gamma)
		var tiltX =  Math.round(event.beta/90 % 2); //Math.abs( Math.round( event.beta / 90 + 1) * 2 )
		var tiltY =  Math.round( event.gamma / 180 + 1) * 2;
		$('#message').html(this.imageDictionary[tiltX]);
		$('#candle-img').attr('src',this.imageDictionary[tiltX]);
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