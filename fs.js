const fs = require("fs");

const text = 'Learning File System'

fs.writeFileSync('./input.txt', text)
const data = fs.readFileSync("./input.txt", { encoding: "utf-8" });

console.log(data);



