(function() {

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function () {
		console.log(event);
        //tilt([event.beta, event.gamma]);
    }, true);
} else if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function () {
		console.log(event);
        //tilt([event.acceleration.x * 2, event.acceleration.y * 2]);
    }, true);
} else {
    window.addEventListener("MozOrientation", function () {
		console.log(event);
        //tilt([orientation.x * 50, orientation.y * 50]);
    }, true);
}

})();