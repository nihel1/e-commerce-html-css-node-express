const express = require('express')

const app = express(); 
const path =require('path');
 




// Custom middleware function to verify the time of the request
app.use((req, res, next) => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    // You can define your time restrictions here
    const startTime = 9; // 9 AM
    const endTime = 17; // 5 PM
    // Check if the current time is within the allowed range
    if ( currentHour >= startTime && currentHour < endTime) {
        // If the time is valid, proceed to the next middleware or route handler
        next();
    } else {
        // If the time is not valid, respond with an error message
    
        res.status(403).send('Access allowed only between 9 AM and 5 PM.');
    }
});


// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res) => {
//     res.status(404);
//     res.send(`<h1>Error 404 : ressource not found</h1>`)
// })

app.listen(3000, () => {
    console.log("App listenig on port 3000");
})