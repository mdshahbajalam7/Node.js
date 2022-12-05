// console.log("Hello world");
const express = require("express");
// const chand = require("./second");
// console.log(chand);
const fs = require("fs");
// fs.readFile("file.txt", "utf-8", (err, data) => {
//   console.log(err, data);
// });


// const a = fs.readFileSync("file.txt")
// console.log(a.toString());
// console.log("Finished reading file");

fs.writeFile("file2.txt","hello",()=>{
    console.log("hello node");
})
// const os = require("./osindex")
// console.log(os);
const app = express();

app.get("/", (req, res) => {
  res.end("Hello World");
});

// app.get("/node",(req,res)=>{
//     res.send("hello node.js You learn by md shahbaj alam")
// })

// app.get("/webpage",(req,res)=>{
//     res.send("<h1>hello webpage</h1>")

// })

// app.use("/chand",)

app.listen(8080, () => {
  console.log("server start on http://localhost:8080");
});
