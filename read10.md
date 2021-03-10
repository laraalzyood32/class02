 # Error Handling & Debugging :
 ####  When you are writing JavaScript, do not expect to write it perfectly the first time. Programming is like problem solving: you are given a puzzle and not only do you have to solve it, but you also need to create the instructions that allow the computer to solve it. too. When writing a long script, nobody gets everything right in their first attempt. The error messages that a browser gives look cryptic at first, but they can help you determine what went wrong in your JavaScript and how to fix it. 

 ## so we learn about this three types of debugger :
 ### 1. THE CONSOLE & DEV TOOLS : Tools built into the browser that help you hunt for errors .
 ### 2. COMMON PROBLEMS Common sources of errors,and how to solve them.
 ### 3. HANDLING ERRORS : How code can deal with potential errors gracefully.

### **** EXECUTION CONTEXT & HOISTING :
###### Each time a script enters a new execution context, there are two phases of activity:
1. PREPARE
• The new scope is created
• Variables, functions, and arguments are created
• The value of the this keyword is determined
2. EXECUTE
• Now it can assign values to variables
• Reference functions and run their code
• Execute statements 

## UNDERSTANDING ERRORS :
If a JavaScript statement generates an error, then it throws an exception. At that point, the interpreter stops
 and looks for exception-handling code.
 If you have errors in your code  you can use a set of statements to handle the error This is important because if the error is not handled, the script will just stop processing and the user will not know why.So exception-handling code should inform users when there is a problem.

 ## ERROR OBJECTS
### Error objects can help you find where your mistakes are and browsers have tools to help you read them.
#### When an Error object is created, it will contain the following properties:
1. name .........   Type of execution
2. message ........   Description
3. fileNumber..... Name of the JavaScript file
4. lineNumber....... Line number of error

## There are seven types of built-in error objects in
1. Syntax Error : SYNTAX IS NOT CORRECT This is caused by incorrect use of the rules of the language. It is often the result of a simple type .
2. Ref erenceError : VARIABLE DOES NOT EXIST This is caused by a variable that is not declared or is
out of scope.
3. EvalError : INCORRECT USE OF The eval () function evaluates text through the interpreter and runs it as code
4. URI Error : INCORRECT USE OF URI FUNCTIONS If these characters are not escaped in URls, they will cause
 an error: / ? & I : ;
 5. Type Error : VALUE IS UNEXPECTED DATA TYPE This is often caused by trying to use an object or method that does not exist.
 6. RangeError : NUMBER OUTSIDE OF RANGE If you call a function using numbers outside of its accepted range.


 # 1: DEBUG THE SCRIPT TO FIX ERRORS
1. If you come across an error while writing a script  you will need to debug the code, track down the source of the error, and fix it.
2. HANDLE ERRORS GRACEFULLY : You can handle errors gracefully using try, catch, throw, and finally statements.

# 1. Debugging is the process of finding errors. It involves a process of deduction.
# 2. The console helps narrow down the area in which the error is located, so you can try to find the exact error.
# 3. JavaScript has 7 different types of errors. Each creates its own error object, which can tell you its line number and gives a description of the error.
# 4. If you know that you may get an error, you can handle it gracefully using the try, catch, finally statements.
# Use them to give your users helpful feedback.

**********************************
# quiz :
1. whats the meaning of debugger ?
2. how mant types of errors ?
3. how you can handel the errors ?
4. what is the benefit of error object ?
