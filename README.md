To run on local:

Create a pusher app, and then get the secrets. Create a file called settings.py with the following contents
```
PUSHER_APP_ID = u'YOUR PUSHER APP ID'
PUSHER_KEY = u'YOUR PUSHER KEY',
PUSHER_SECRET = u'YOUR PUSHER SECRET'
```

Install the python requirements

` $ pip install -r requirements.txt`

Then install the client side requirements

`$ npm install`

Then run webpack

`$ webpack`

Then run the tests  

`$ mocha static/tests_bundle.js`

Then set the flask variable  

`export FLASK_APP=application.py`

Then run the server  

`flask run`

Then go to http://localhost:5000


The app is actually 2 pages built using react and redux.  
* The first page acts as the data source: It lets you generate realtime like data based on your input, and broadcasts that data over websockets every second. So, the first page is actually the API server here.  
* The second page is the actual visualization page, that subscribes to the broadcast, and renders the data that is generated by the first page.


You could actually run the 2 pages in separate computers and it would still work.

So, here is what you need to do:  
1. Go to the first page.  
2. Enter some stock symbols.  
3. Start streaming the stock symbol data.  
4. From the first page, click on the link to go to the second page in a new tab where you can see the visualizations.


Please note: You have to keep the first page open to keep broadcasting the data.



