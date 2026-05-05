// JavaScript Runtime

JavaScript Engine alone is not sufficient to run the code, it needs Web APIs (DOM, setTimeout, setInterval, fetch API , Timers) to run the code.
The above all are provided by JavaScript Runtime. It provides environment to execute JS code.

JS Runtime -> JavaScript Engine + APIs + Event Loop + Callback Queue + Environment

Examples of JS Runtimes: 

1) Browser : 
 Contains -> V8 Engine, Web APIs: setTimeout, setInterval , DOM , Timers, fetch API, Event Loop, CallBack Queue.
 Example Code : setTimeout(() => console.log("Hi"), 2000);

 Execution Steps:
1. Engine sees setTimeout
2. Hands it to Web API
3. Timer runs outside engine
4. After 2s → callback goes to Callback Queue
5. Event Loop pushes it into Call Stack
6. Executes

2) Node JS:
Contains -> V8 Engine , C++ Bindings, APIs : File System(fs), HTTP , Event Loop (libuv)

Example Code: 
const fs = require("fs");

fs.readFile("file.txt", () => {
  console.log("Done");
});

