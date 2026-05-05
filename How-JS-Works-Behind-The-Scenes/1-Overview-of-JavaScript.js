                                                  *HIGH LEVEL OVERVIEW OF JAVASCRIPT*

"Definition of JavaScript in technical terms" - 
JavaScript is a,
High Level
  Garbage collected 
   Interpreted or JIT(Just in Time) compiled 
     Multi-Paradigm
      Protoype-based and Object-Oriented 
        First-Class Functions Supported
         Dynamically Typed
          Single-Threaded
           Non-Blocking Event Loop Model
Programming Language

1) High Level - JavaScript is high level language as the coder or programmer doesnot need to care about internal hardware 
                of the computer on how the memory alllocation,management etc is being performed.

2) Garbage Collected - The unused variables or objects are automatically collected and deleted if unused by inbuilt Garbage Collector time-to-time.

3) Interpreted or JIT compiled -  JavaScript code is interpreted meaning code is executed line-by-line and then converted to machine code.
                                  As this process takes quite amount of time when there is large codebase to execute, the V8 engine would 
                                  compile hot code to machine code at runtime using some optimization techniques internally for faster execution.
                                    
4) Multi-Paradigm - JavaScript supports 3 kinds of programming paradigms
                      -> Procedural Programming
                      -> Object Oriented Programming
                      -> Functional Programming

5) Prototype-based and Object-Oriented - 

6) First Class Functions -  First class functions are special kind of functions which can be 
                            stored in variables, returned from other functions and also passed as value to other functions.
                            JavaScript is a supporter of this feature.

7) Dynamically Typed - JavaScript supports dynamic typing which is nothing but the types are decided at run time not compile time.
                       This approach is both good and bad as it may produce some unexpected type errors which was the reason 
                       "TypeScript" came into picture.

8) Single Threaded - "Time and Tide waits for none", similarly JavaScript waits for none, meaning it was created to run on a single thread
                      initially, the code gets executed line-by-line waiting for nothing. Later asynchronous or multi threaded kinda concepts were introduced 
                      in it too.

9) Non Blocking Event Loop - "Event Loop" was created to handle asynchronous tasks without blocking the main task or main thread.
                              It takes long running tasks and executes them in the background and puts them back to the main thread once they are finished.

