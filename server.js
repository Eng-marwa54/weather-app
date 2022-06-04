// Setup empty JS object to act as endpoint for all routes
projectData =[];

// Require Express to run server and routes
let express= require('express');
let bodyparser=require('body-parser');

// Start up an instance of app
const app= express();
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Cors for cross origin allowance
let cors=  require ('cors');
app.use(cors());

// Initialize the main project folder
app.use(express. static('website'));

//post req
app.post('/add',postData);
function postData(req,res){
    console.log(req.body);
 dataObject ={}
dataObject.date=req.body.date;
dataObject.temp=req.body.temp;
dataObject.content=req.body.content;

projectData.push(dataObject);

}

//get data with call back function
app.get('/all',sendData);
function sendData(req,res){
res.send(projectData);
projectData=[];
};
// Setup Server

const port=8080;
 app.listen(port, listn);
 function listn() {
    
console.log(`server is running on http://localhost:${port}`)
}