const fs=require("fs");
let json="students.json";

module.exports ={
    writeFileFn: function(text){
        fs.writeFileSync(json,text,function(err){
            if(err){
                console.log(`An error occured ${err}`);
                return;
            }
            console.log("The file was successfully saved! Bravo!");
        })
    },
    readAndParseJsonFile: function(){
        let jsonFileParsed=fs.readFileSync(json,{encoding:"utf-8"});
        console.log(jsonFileParsed);
        return JSON.parse(jsonFileParsed);
    }
}