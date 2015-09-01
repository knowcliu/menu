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

    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia;
}

main();
