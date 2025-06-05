let text = "new file";

const fs = require("fs");

console.log(text);

fs.writeFile("./input.txt", text, { encoding: "utf-8" }, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("read input.txt file asynchronously");
});

fs.readFile("./input.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  text = data;
  console.log(data);
});
