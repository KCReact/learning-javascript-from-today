// Execution Context
-> Execution context is an environment which stores all the necessary information which is important for JavaScript code execution.

  What does an Execution Context contain in it ?
  
  1) Variable Environment
  -> let , const and var declarations.
  -> Functions.
  -> arguements object.

  2) Scope Chain.
  3) this keyword.

-> A Global Execution Context (GEC) is created first which contains all the variable declarations and code for functions.
-> Then as we encounter function calls in the code, each function would have it's own Execution Context created.
-> In a program with 100s or 1000s of functions, these Execution Contexts are stacked on top of each other in something called "Call Stack".
-> The topmost execution context on the Call Stack can be considered as the one which is in execution currently.
-> Once the execution reaches the end of function body, it's execution context is popped off the stack and the remaining Execution Contexts are executed in the order.
-> Once all the functions are done with execution, finally GEC is also popped off and garbage collection process proceeds.
