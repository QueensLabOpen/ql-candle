(function() {

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function (event) {
		console.log(event);
		$('#message').append(event.alpha+' '+event.beta+' '+event.gamma);
        //tilt([event.beta, event.gamma]);
    }, true);
} else if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function () {
		console.log(event);
		$('#message').append(event);
        //tilt([event.acceleration.x * 2, event.acceleration.y * 2]);
    }, true);
} else {
    window.addEventListener("MozOrientation", function () {
		console.log(event);
		$('#message').append(event);
        //tilt([orientation.x * 50, orientation.y * 50]);
    }, true);
}

})();