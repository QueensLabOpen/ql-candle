var currentXState = 0;
var handler = {
	
	onOffDictionary: {
		0:"img/transparent_candle/ljus_0.png", 		
		1:"img/transparent_candle/candle_off.png", 
		2:"img/transparent_candle/candle_off.png",
		3:"img/transparent_candle/ljus_0.png",
		4:"img/transparent_candle/candle_off.png"
	},
	rotateDictionary: {
		0:"img/transparent_candle/ljus_0.png", 		
		1:"img/transparent_candle/candle_off.png", 
		2:"img/transparent_candle/candle_off.png",
		3:"img/transparent_candle/ljus_0.png",
		4:"img/transparent_candle/candle_off.png"
	},
	
	processEvent: function (event) {
		var tiltX =  Math.round( event.beta / 90 ) + 2;
		if(tiltX == currentXState) return;
			postAngle(tiltX);

		var tiltY =  Math.round( event.gamma );
		// $('#candle-img').attr('src', this.onOffDictionary[tiltX]);


		// if(tiltX === 2	 || tiltX == 3) {

		// 		for (i = 0; i < 142; i++) { 
		// 		{
		// 			$('#candle-img').attr('src',  "img/transparent_candle/ljus_0.png".replace("0",i));
		// 			setTimeout(function(){}, 20);
		// 		}	
		// 	}

		//}

		$('#message').html('TiltX: '+tiltX+' Image: '+this.onOffDictionary[tiltX]);
	},
	
	changeImage(xstate) {
		$('#candle-img').attr('src', this.onOffDictionary[xstate]);	
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
