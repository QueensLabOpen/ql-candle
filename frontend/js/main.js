(function() {

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function () {
		$('#message').html(event.alpha+' '+event.beta+' '+event.gamma);
        //tilt([event.beta, event.gamma]);
    }, true);
} else if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function () {
		$('#message').html(event.alpha+' '+event.beta+' '+event.gamma);
        //tilt([event.acceleration.x * 2, event.acceleration.y * 2]);
    }, true);
} else {
    window.addEventListener("MozOrientation", function () {
		$('#message').html(event.alpha+' '+event.beta+' '+event.gamma);
        //tilt([orientation.x * 50, orientation.y * 50]);
    }, true);
}

})();