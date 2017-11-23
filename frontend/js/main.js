var handler = {
	
	onOffDictionary: {
		0:"img/transparent_candle/ljus_3_00000.png", 		
		1:"img/candleoff.gif", 
		2:"img/candleoff.gif",
		0:"img/transparent_candle/ljus_3_00000.png",
		4:"img/candleoff.gif"
	},
	
	processEvent: function (event) {
		var tiltX =  Math.round( event.beta / 90 ) + 2; 
		var tiltY =  Math.round( event.gamma );
		//$('#message').html(this.imageDictionary[tiltX]);
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
