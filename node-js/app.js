const http=require("http");
const hostname="127.0.0.1";
const port=3000;



class Student {
    constructor(firstName, lastName, gender, age, averageGrade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.averageGrade = averageGrade;
    }
}

let studentsArray=[new Student("Amy","Clarence","female",25,7), new Student("Tom","Collins","male",23,9),new Student("Tod","Bronkowski","male",21,10)];


const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-type","application/json");
    res.write(JSON.stringify(studentsArray));
    res.end();
})

server.listen(port,hostname,function(){
    console.log(`The server is listening on this hostname ${hostname} - ${port}`);
})