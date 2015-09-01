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
        alert('no user media support');
        return;
    }

    console.log('user media support ok!');

    navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia || navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

    navigator.getUserMedia({video: true}, function(stream) {
        var video = document.getElementById('video-id');
        var canvas = document.getElementById('canvas-id');
        var button = document.getElementById('button-id');

        var url = window.url || URL;
        video.src = url.createObjectURL(stream);
        video.play();

        button.disabled = false;

        /*
        button.onclick = function() {
            canvas.getContext('2d')
                .drawImage(video, 0, 0, 300, 300, 0, 0, 300, 300);
        };
        */
    }, function(err) {
        alert('there was an error');
    });
}

main();
