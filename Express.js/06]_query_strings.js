// Query Strings

// Query strings in Express.js are a way to pass data to the server through the URL, typically used for filtering, searching, 
// or pagination.

//---------------------------------------------------------------------------------------------------------------------------------------

// Syntax:

// Query strings are appended to the URL after a question mark (?) and consist of key-value pairs separated by ampersands (&).
// Example URL: /search?q=keyword&page=1

//---------------------------------------------------------------------------------------------------------------------------------------

// Usage:

// Access query string parameters from the request using `req.query`
app.get('/search', (req, res) => {
    const keyword = req.query.q; // Contains 'keyword'
    const page = req.query.page; // Contains '1'
    // Perform search or pagination based on query parameters
});