const fetch=require("node-fetch");
fetch('http://localhost:3000/')
.then(res=>res.json())
.then(data=>console.log(data))
.catch(error=>console.log(error))