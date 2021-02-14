let button = document.getElementById("button");
let table=document.getElementById("table");

function getPersonDetails() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(resultJson => {
            resultJson.json()
                .then(resultObject => {
                    console.log(resultObject);
                    printPersonDetails(resultObject);
                });
        })
        .catch(error => {
            console.log(error);
        })
}

function printPersonDetails(result) {

    let tr1=document.createElement("tr");
    tr1.innerHTML='<th>Name</th><th>Username</th><th>Email</th><th>City</th><th>Phone number</th><th>Website</th><th>Company name</th>'
    table.appendChild(tr1);
    
    let tr2=document.createElement("tr");
    tr2.innerHTML=`<td>${result.name}</td><td>${result.username}</td><td>${result.email}</td><td>${result.address.city}</td><td>${result.phone}</td><td>${result.website}</td><td>${result.company.name}</td>`
    table.appendChild(tr2);
     
    table.style.border = "5px dashed black";
    table.style.color = "red";
}

button.addEventListener("click", getPersonDetails);

