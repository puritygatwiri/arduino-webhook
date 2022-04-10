//Require express and body-parser
const express = require("express");
const bodyParser = require("body-parser");

//Initialize express and define a port
const app = express();
const PORT = 80;

//Tell express to use body-parser's JSON parsing
app.use(bodyParser.json());
app.post("/hook", (req, res) => {
    console.log(req.body);//call your action on the request here
    res.status(200).end();//Responding is important
});

// app.get("/", (req,res) =>{
//     res.send('hellos guys');
// })

//Start express on the defined port
app.listen(PORT, () => console.log('server running on port &{PORT}'));
