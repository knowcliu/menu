function hasGetUserMedia()
{
    'use strict';

    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

function main()
{
    'use strict';

    if (!hasGetUserMedia()) {
        alert('No user media support. Try using the latest version of Chrome for best results.');
        return;
    }

    console.log('user media support ok!');

    navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia || navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

    navigator.getUserMedia({video: true}, function(stream) {
        var video = document.getElementById('video-id');
        var button = document.getElementById('button-id');
        var canvas = document.getElementById('canvas-id');
        var ctx = canvas.getContext('2d');

        // STEP 1: Display the video stream in the canvas
        var url = window.url || URL;
        video.src = url.createObjectURL(stream);
        video.play();

        button.disabled = false;
        button.onclick = function() {
            // STEP 2: capture the image into the canvas element
            // TODO: calculate width/height dynamically
            ctx.drawImage(video, 0, 0, 640, 480, 0, 0, 300, 225);

            // STEP 3: Use glfx.js to manipulate the image
            var fxCanvas = fx.canvas();
            var texture = fxCanvas.texture(canvas);
            // TODO: allow the user to apply filters manually
            fxCanvas.draw(texture).brightnessContrast(0.1, 0.7).update();
            ctx.drawImage(fxCanvas, 0, 0);

            // STEP 4: OCR the text from the image
            var image = ctx.getImageData(0, 0, 300, 300);
            var string = OCRAD(image);

            // STEP 5: Search Google for the string
            if (window.confirm("Let me Google this for you:\n" + string)) {
                searchGoogle(string);
            }
        };
    }, function(err) {
        alert('There was an error.');
    });
}

main();
