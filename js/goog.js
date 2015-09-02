var initialized = false;

function init() {
    gapi.client.setApiKey(APIKEY);
    gapi.client.load('customsearch', 'v1');
    initialized = true;
}

function processResponse(searchResponse) {
        searchResponse.items.forEach(function(item) {
            try {
                var theSRC = item.pagemap.cse_thumbnail[0].src; 
                var results = document.getElementById('results-id');
                var img = results.appendChild(document.createElement('img'));
                img.src = theSRC;
            } catch (e) { }
        }
    );
}

function searchGoogle(string) {
    setTimeout(function() {
        console.log("Searching Google for: " + string);
        gapi.client.request({
            'path': '/customsearch/v1',
            'params': {
                'q': string,
                'enableImageSearch': true,
                'defaultToImageSearch': true,
                'disableWebSearch':true,
                'cx': CX
            }
        }).then(function(resp) {
            processResponse(resp.result);
        });
    }, 1000);
}
