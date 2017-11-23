var handler = {
	
	imageDictionary: {
		0:"img/candleoff.gif",
		1:"img/candleoff.gif", 		
		2:"img/candle-anim.gif", 
		3:"img/candle-anim.gif"
	},
	
	processEvent: function (event) {
		console.log(event);
		console.log(this.imageDictionary[2]);
		//$('#message').html(event.alpha+' '+event.beta+' '+event.gamma)
		var tiltX =  Math.round( event.beta ) + 1;
		var tiltXPlusStuff = Math.round(tiltX/90 % 2);
		//var tiltY =  Math.round( event.gamma );
		$('#message').html('TiltX: '+ tiltXtiltXPlusStuff + ' Plus: '+ tiltXPlusStuff);
		$('#candle-img').attr('src',this.imageDictionary[ tiltXPlusStuff ]);
		//$('#message').html(tiltX+' '+tiltY)
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
