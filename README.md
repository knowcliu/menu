# What's on the menu?
This will use your built-in camera to take a picture of a menu or other text and search Google Images for the words it finds.

## To run this code
- Add a new file in the project root directory and call it `js/secrets.js`. Add two global vars like so:
```
APIKEY = '<your secret api key here>';
CX = '<your CX here>'
```

Follow these instructions to get their values:


### APIKEY
- Create a new project with the [Google Developers Console](https://console.developers.google.com/project):
* Enable the _Custom Search API_
* Create a new key by navigating to _APIs & auth_ > _Credentials_ > _Add credentials_ > _API key_
* Use this value for APIKEY in `secrets.js`.

### CX
- Register a new Search Engine with [Google Custom Search](https://cse.google.com/cse) to get keys to the API
* Click _New search engine_ and fill in basic info. Use _Sites to search_ = 'www.flickr.com'.
* Enable _Image search_ on the _Basic_ tab.
* Select _Search the entire web but emphasize included sites_ under the _Sites to search_ section.
* Copy the CX: Go into the newly created search engine and on the _Basic_ tab there will be a _Details_ section with _Search engine ID_. Use this value for  CX in `js/secrets.js`.
