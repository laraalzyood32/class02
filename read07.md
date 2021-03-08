# Domain Modeling :
Domain modeling is the process of creating a conceptual model in code for a specific problem.

# Define a constructor and initialize properties
To define the same properties between many objects, we’ll want to use a constructor function.
The constructor function is defined using a function expression.
### 1.The new keyword instantiates (i.e. creates) an object.

### 2.The constructor function initializes properties inside that object using the this variable.

### 3. The object is stored in a variable for later use.
                 ********************************
# Generate random numbers :

To model the random nature of user behavior, we’ll need the help of a random number generator. Fortunately, the 

JavaScript standard library includes a Math.random() function for just this sort of occasion.

methods can be added to a constructor function’s prototype.

The percentage variable is assigned a decimal percentage based on the object’s property.

### six tips to build domain model :

1- When modeling a single entity that’ll have many instances, build self-contained objects with the same attributes and behaviors.

2- Model its attributes with a constructor function that defines and initializes properties.

3- Model its behaviors with small methods that focus on doing one job well.

4-Create instances using the new keyword followed by a call to a constructor function.

5-Store the newly created object in a variable so we can access its properties and methods from outside.

6- Use the this variable within methods so we can access the object’s properties and methods from inside

 ****************************
# Tables
What’s a Table?
A table represents information in a grid format. Examples of tables include financial reports, TV schedules, and sports results.
Basic Table St ructure
(table)
1. (tr)
2. (tf)
3. (th)
### Spanning Rows
You may also need entries in a table to stretch down across more than one row.
Long Tables
There are three elements that help distinguish between the main content of the table and the first and last rows (which can contain different content).
 
**********************
chapter 3 
# function and method
Global variables use more memory. The browser has to remember them for as long as the web page using them is loaded. Local variables are only remembered during the period of time that a function is being executed.
## CREATING THE VARIABLES IN CODE
Each variable that you declare takes up memory.The more va ri ables a browser has to remember,
the more memory your script requires to run. Scripts that require a lot of memory can perform slower
# Objects
 group together a set of variables and functions to create a model of a something you would recognize from the real world. In an object, variables and functions take on new names.
 ## IN AN OBJECT: VARIABLES BECOME KNOWN AS PROPERTIES
If a variable is part of an object, it is called a property. Properties te ll us about the object, such as
the name of a hotel .
## IN AN OBJECT: FUNCTIONS BECOME KNOWN AS METHODS
If a function is part of an object, it is called a method. Methods represent tasks that are associated with
the object. For example, you can check how many rooms are available by subtracting the number ofbooked rooms 
from the total number of rooms.

# RECAP: WAYS TO CREATE OBJECTS
CREATE THE OBJECT, THEN ADD PROPERTIES & METHODS
 the object is created on the first line of the code sample. The properties and methods are then added to it afterwards.
# THIS (IT IS A KEYWORD)
The keyword this is commonly used inside functions and objects. Where the function is declared alters what this means. It always refers to one object, usually the object in which the function operates.
# store data
 In JavaScript, data is represented using name/value pairs. To organize your data, you can use an array or object to group a set of related values. In arrays and objects the name is also known as a key.
 ### ARRAYS :
Arrays can store multiple pieces of information. Each piece of information is separated by a comma .
 # Browsers come with a set of built-in objects that represent things like the browser window and the current web page shown in that window .
 # JavaScript there are six data types:
Five of them are described as simple (or primitive) data types. The sixth is the  # object
 # String
2. Number
3. Boolean:true or false
4. Undefined :(a variable that has been declared, but no value has been assigned to it yet)
5. Null : (a variable with no value).
6. 6.0bject : arrays and functions are considered types of objects.

# MATH OBJECT TO CREATE
RANDOM NUMBERS designed to generate a random whole number between 1 and 10.
# 1. An object is a series of variables and functions that represent something from the world around you.
# 2.In an object, variables are known as properties of the object; functions are known as methods of the object.

# QUIZ
1. what are the complicated data type?
2. whats the meaning of object ?
3. whats the difference between the method and function
4. HOW we can store data ?
