const { CONNREFUSED } = require("dns");
const fs = require("fs");

// creating a new file
// fs.writeFileSync("read.txt", "welcome to my channel");

// fs.writeFileSync("read.txt", "sanika welcome  to my channel");

// fs.appendFileSync("read.txt", " how are you i  am fine")


// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);

// node js includes an additional data type called buffer
// not available in browser 's javascript
// buffer is mainly used to store binary data
// while reading form a file or receiving packets over the network.

// org_data = buf_data.toString();

// console.log(org_data);
  
// to rename the file
fs.renameSync("read.txt", "readwrite.txt");

 fs.writeFileSyn("sanika");
 
//  fs.writerfilesync("sanika/bio.txt","my name is sanika sahu");
//  const data = fs.readFileSync("sanika/readwrite.txt","utf8");
//  console.log(data);

// fs.unlinkSync("sanika/readwrite.txt");
