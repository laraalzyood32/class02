# object literal :
JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces. Object literals encapsulate data, enclosing it in a tidy package. This minimizes the use of global variables which can cause problems when combining code
# data types of object :
### 1. Number
### 2. String
### 3. Boolean
### 4. Undefined
### 5. Null

# Objects group together a set of variables and functions to create a model
# of a something you would recognize from the real world. In an object,
# variables and functions take on new names
 ### property :If a variable is part of an object  
 Properties tell us about the object,such as the name of a hotel or the number of rooms it has.
### METHODS : IN AN OBJECT: FUNCTIONS BECOME KNOWN AS METHODS
If a function is part of an object, it is called a method. Methods represent tasks that are associated with the object. For example, you can check how many
rooms are available by subtracting the number of booked rooms from the total number of rooms .
 ### properties and methods have 1. aname and  2. a value. In an object, that name is called a key.
 ### An object cannot have two keys with the same name. 
 This is because keys are used to access their corresponding values.
 ### The value of a property can be a string, number, Boolean, array
 ### The value of a method is always a function.

example :
var hotel = {
    name : royal ,
    room : 40 ,
   booked : 25 ,

   1. so name and room and booked those are ##  keys 
   2. and royal and 40 , 25 ..... we called these  ## value

  # PROPERTIES: KEY VALUE
name  :string
rooms : number
booked : number
gym  : Boolean
room  :Types array
# METHODS: checkAvailability function .

# Functions allow you to group a set of related statements together that represent a single task.
# Functions can take parameters (informatiorJ required to do their job) and may return a value.
# An object is a series of variables and functions that represent something from the world around you.
# In an object, variables are known as properties of the object;
# functions are known as methods of the object.
# Web browsers implement objects that represent both the browser window and the document loaded into the
browser window.
# JavaScript also has several built-in objects such as String, Number, Math, and Date. Their properties and
# methods offer functionality that help you write scripts.
# Arrays and objects can be used to create complex data sets (and both can contain the other).

# chapter 5 
# The Document Object Model (DOM) specifies :
how browsers should create a model of an HTML page and how JavaScript can access and update the contents of a web page while it is in the browser window.
# THE DOM TREE IS A MODEL OF A WEB PAGE As a browser loads a web page, it creates a model of that page.
The model is called a DOM tree, and it is stored in the browsers' memory. It consists of four main types of nodes.

# ACCESSING ELEMENTS
DOM queries may return one element, or they may return a Nodelist, which is a collection of nodes

1.Sometimes you will just want to access one individual element 
METHODS THAT RETURN A SINGLE ELEMENT NODE: getElementByld 
Selects an individual element given the value of its id attribute .
***************
# GROUPS OF ELEMENT NODES :
2.If a method can return more than one node, it will always return a Nodelist, which is a collection of nodes .
METHODS THAT RETURN ONE OR MORE ELEMENTS (AS A NODELIST):
getElementsByClassName
Selects one or more elements given the value of their class attribute.

# ***You can select element nodes by their id or class attributes, by tag name, or using CSS selector syntax.
# Whenever a DOM query can return more than one node, it will always return a Nadel is

# quiz :
1.what is the meaning of object ?
2.what the difference between function and methods ?
3. HOW we can access one individual element ?
4. HOW we can RETURN ONE OR MORE ELEMENTS ?
5. give me example of function and mark in colors the keys and values

