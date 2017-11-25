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
		
		// Stefan testar
		float[] g = new float[3]; 
		g = event.values.clone();

		double norm_Of_g = Math.sqrt(g[0] * g[0] + g[1] * g[1] + g[2] * g[2]);

		// Normalize the accelerometer vector
		g[0] = g[0] / norm_Of_g;
		g[1] = g[1] / norm_Of_g;
		g[2] = g[2] / norm_Of_g;
		
		int inclination = (int) Math.round(Math.toDegrees(Math.acos(g[2])));
		
		int index = 0;
		int rotation = 0;

		if (inclination < 25 || inclination > 155)
		{
			// device is flat
		}
		else
		{
			// device is not flat
			rotation = (int) Math.round(Math.toDegrees(Math.atan2(g[0], g[1])));
			index = 1;

		}
		var tiltX = index;
		if(tiltX == currentXState) return;
			postAngle(tiltX);

		//var tiltY =  Math.round( event.gamma );
		// $('#candle-img').attr('src', this.onOffDictionary[tiltX]);


		// if(tiltX === 2	 || tiltX == 3) {

		// 		for (i = 0; i < 142; i++) { 
		// 		{
		// 			$('#candle-img').attr('src',  "img/transparent_candle/ljus_0.png".replace("0",i));
		// 			setTimeout(function(){}, 20);
		// 		}	
		// 	}

		//}

		$('#message').html('Index: '+index+' Rotation: '+rotation);
		
		// Original Code
		/*
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
		*/
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
