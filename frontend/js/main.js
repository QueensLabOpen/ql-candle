var handler = {
	
	onOffDictionary: {
		0:"img/transparent_candle/ljus_3_00000.png", 		
		1:"img/transparent_candle/candle_off.png", 
		2:"img/transparent_candle/candle_off.png",
		3:"img/transparent_candle/ljus_3_00000.png",
		4:"img/transparent_candle/candle_off.png"
	},
	
	processEvent: function (event) {
		var tiltX =  Math.round( event.beta / 90 ) + 2; 
		var tiltY =  Math.round( event.gamma );
		$('#candle-img').attr('src', this.onOffDictionary[tiltX]);




		$('#message').html('TiltX: '+tiltX+' TiltY: '+tiltY+' Image: '+this.onOffDictionary[tiltX]);
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
