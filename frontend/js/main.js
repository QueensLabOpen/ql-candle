(function() {

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function () {
		$('#message').html(event.alpha+' '+event.beta+' '+event.gamma);
    }, true);
} else if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function () {
		$('#message').html(event.alpha+' '+event.beta+' '+event.gamma);
    }, true);
} else {
    window.addEventListener("MozOrientation", function () {
		$('#message').html(event.alpha+' '+event.beta+' '+event.gamma);
    }, true);
}

})();