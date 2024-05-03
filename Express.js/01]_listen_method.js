// Methods

// listen():-
// This method is used to start a Node.js server and listen for incoming requests on a specified port.
// It is most used method in express.


// Syntax:-
// app.listen(port,callback);

//---------------------------------------------------------------------------------------------------------------------------------------

// *Ports 
// - Ports are logical endpoints of a network connection that is used to exchange information between a web server and a web client
// - They are number on which the server should listen for incoming requests.

// *Callback:
// - A function that is called once the server has started listening.

//---------------------------------------------------------------------------------------------------------------------------------------

// for e.g

const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
