const EventEmitter = require("node:events");

class SchoolBell extends EventEmitter {}

SchoolBell = new SchoolBell();
SchoolBell.on("ring", () => {
  console.log("an event occurred!");
});
SchoolBell.on("ring", () => {
  console.log("Another event occurred!");
});
SchoolBell.on("Broken", () => {
  console.log("New event occurred!");
});

SchoolBell.emit("ring");
SchoolBell.emit("Broken");