function hasGetUserMedia() {
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

console.log(hasGetUserMedia() ? 'yay support!' : 'no user media support');
