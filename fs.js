const fs = require("fs");

// fs.writeFile("read.text","today is a awesome :)",(err) {
//     console.log("files is created");
//     console.log(err);
// }); 
fs.appendFile("read.txt",
"plz like and share and subs my channel",
(err) {
    console.log("task completed");
}
fs.readFile("read.txt","UTF-8",(err,data)  {
console.log(data);
});
console.log("after the data");
fs.readFile('read.txt , '"asci)
const fs = require ('fs');
fs.mkdir('thapa',(err) {
    console,log("folder created");
});