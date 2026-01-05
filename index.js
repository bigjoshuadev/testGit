
/*const fs = require("fs");
fs.writeFile("message.txt","hello testinggg",(err) => {
  if (err) throw err;
  console.log("checking");
}); */

const fs = require("fs");
fs.readFile("./message.txt","utf-8",(err,data) => {
  if (err) throw err;
  console.log(data);
});