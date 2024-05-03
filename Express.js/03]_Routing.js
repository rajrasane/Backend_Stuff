// Routing 

// - It is process of selecting a path for traffic in a network or between or across multiple networks

// 1) GET request

// syntax:
//  app.get(path, callback)

// for e.g

app.get("/",(req,res)=>{
    res.send("You contacted root path!");
});

app.get("/help",(req,res)=>{
    res.send("You contacted help path!");
});

app.get("*",(req,res)=>{   //<- For any non existing path except above ones
    res.send("This path does not exist!");
});


// - It is same for other types of requests as well . 

// app.post(path, callback)
// app.put(path, callback)
// app.delete(path, callback)
// app.all(path, callback): Matches any HTTP method.

//---------------------------------------------------------------------------------------------------------------------------------------
