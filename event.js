const EventEmitter = require("node:events");

class SchoolBell extends EventEmitter {}

const SchoolBell = new SchoolBell();
SchoolBell.on("ring", () => {
  console.log("an event occurred!");
});
SchoolBell.emit("ring");
