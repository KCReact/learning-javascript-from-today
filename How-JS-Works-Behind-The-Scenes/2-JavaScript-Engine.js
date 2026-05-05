// JavaScript Engine
JS Engine is the software which converts human readable code to machine code.
It mainly has two parts -> Call Stack and Heap

-> Call Stack : This is the place where the execution contexts and variables are stored in memory.
-> Heap : This is the place where objects are stored in memory during execution.

Popular JS Engines : V8 (Chrome, NodeJS) , SpiderMonkey (Firefox) , JavaScriptCore (Safari)

Inside the engine:

1) Parser : Reads the code, checks syntax and converts into Abstract Syntax Tree (AST).

2) Interpreter : Converts the AST to bytecode and runs immediately.

3) Compiler : Converts frequently used code to optimized machine code and makes execution faster over time.

4) Garbage Collector : Automatically frees unused memory and prevents memory leaks.

Flow:
  JS Code -> Parser -> AST -> Interpreter -> ByteCode -> Compiler -> Machine Code -> CPU Executes -> Garbage Collector.
