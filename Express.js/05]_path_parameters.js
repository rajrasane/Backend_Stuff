// Path Parameters

// - Path parameters allow dynamic segments in URL paths, enabling flexible route handling.


// Syntax:

// Define a path parameter in a route by prefixing a segment with a colon (`:`)

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Use userId to retrieve user data
});

//---------------------------------------------------------------------------------------------------------------------------------------

// Usage:-

// Extract path parameters from the request using `req.params`.
// Example URL: `/users/123`
app.get('/users/:id', (req, res) => {
    const userId = req.params.id; // Contains '123'
    // Retrieve user data based on userId 123
});

//---------------------------------------------------------------------------------------------------------------------------------------
