/* Global Variables */
const mainurl='http://api.openweathermap.org/data/2.5/weather?zip='
const apikey = '&appid=b56be08288a9a3d191ca2539cbefa51e&units=metric';
const btn = document.getElementById('generate');
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

btn.addEventListener('click',action);
function action(e){

    const userZip =document.getElementById('zip').value;
    const userFeel =document.getElementById('feelings').value;
if(userZip===""){
    alert('please enter ZipCode')
}
    getData(mainurl,userZip,apikey)

    .then((dataEntered) =>{
        console.log(dataEntered);
        postData('/add',{date:d,temp:dataEntered.main.temp,content:userFeel})
    })

    .then(()=>{updateUI()});

  //  removeText();
}
// get data
const getData = async(mainurl,zip,key)=>{
    const response= await fetch(mainurl+zip+key);
try {
const dataEntered= await response.json();
return dataEntered;
}catch(error){
console.log(`Error is:${error}`);
}
}

//post data

const postData=async(url='',data={})=>{
    console.log(data);
    const res=await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        
    });
    try {
        const newData=await res.json();
        return newData;
    } catch(error){
        console.log(`error is:${error}`);
    }
}
 
// function to get projectdata 

const updateUI=async()=>{
    const req= await fetch('/all');
    try{
        const alldata=await req.json();
        document.getElementById('date').innerHTML=`Date: ${alldata[0].date}`;
        document.getElementById('temp').innerHTML=`Temperature: ${alldata[0].temp}`;
        document.getElementById('content').innerHTML=`my feling is:${alldata[0].content}`;
        

    }catch(error){
        console.log(`error is:${error}`);
    }
}

