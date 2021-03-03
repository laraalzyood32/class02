# links:
Links are the defining feature of the web because they allow you to move from
one web page to another — enabling the very idea of browsing or surfing.
## You will commonly come across the following types of links:
#### Links from one website to another
####  Links from one page to another on the same website
#### Links from one part of a web page to another part of the same page
####  Links that open in a new browser window
####  Links that start up your email program and address a new email to someone
# Writing Links :
Links are created using the <a> element. Users can click on anything
between the opening <a> tag and the closing </a> tag. You specify
which page you want to link to using the href attribute.
Writing Links
<a href="http://www.imdb.com">IMDB</a>
### 1. Linking to Other Sites 
write <a></a> between them you will but <href>The value of the
href attribute is the page that you want people to go to when
they click on the link. then paste the (url )of the web site Every web
page has its own URL. This is the web address that you would type
into a browser if you wanted to visit that specific page.
## Linking to Other Pages on the Same Site
you dont need to specify the (url) you can use *relative URL.
# example :
<li><a href="index.html">Home</a></li>
## Directory Structure:
On larger websites it's a good idea to organize your code by placing the
pages for each different section of the site into a new folder. Folders on a
website are sometimes referred to as directories.
### 1. Relationships The relationship between files and folders on a website
is described using the same terminology as a family tree.
### Homepages: The main homepage of a site written in HTML.
### Relative URls:
Relative URLs can be used when linking to pages within your own website. They provide a shorthand way of telling the browser where to find your files.
## To link to a file in the same folder, just use the file
name. 
## Opening Links in a New Window 
you can use the
target attribute on the opening
<a> tag. The value of this attribute should be _blank
<a href="http://www.imdb.com" target="_blank">

1. You can create links to open email programs with an email address in the "tofield.
2. You can use the id attribute to target elements within
a page that can be linked to.
# Layout :
how to control where each element sits on a page and how to create attractive
page layouts.

1. Key Concepts in Positioning Elements: Building Blocks
Containing Elements
2. If one block-level element sits inside anotherblock-level element then the outer box is known as the containing or parent element.
## 1. Normal flow :position:static
In normal flow, each block-level element sits on top of the next
one. Since this is the default way in which browsers treat HTML elements.
##  2. Relative Positioning :position:relative
Relative positioning moves an element in relation to where it
would have been in normal flow.
## 3. ABSOLUTE POSITINING : position:absolute
When the position propertyis given a value of absolute,the box is taken out of normal flow and no longer affects theposition of other elements on the page.
## 4. FIXED POSITIONING :position:fixed
Fixed positioning is a type of absolute positioning that
requires the position propertyto have a value of fixed.
### OVERLAPPING ELEMENTS:
1. FLOATING EKEMENTS :float
# CSS Frameworks:
CSS frameworks aim to make your life easier by providing the code for
common tasks, such as creating layout grids, styling forms
##  ADVANTAGES
1. They save you from repeatedly writing code for
the same tasks.
2. They will have been testedacross different browser
versions (which helps avoid browser bugs).
##  disADVANTAGES :
They often require that you use class names in yourHTML code that only control the presentation of the page(rather than describe its content).
<div> elements are often used as containing elements
to group together sections of a page.
## 1. Browsers display pages in normal flow unless you
specify relative, absolute, or fixed positioning.
## 2. The float property moves content to the left or right
of the page and can be used to create multi-column
layouts. (Floated items require a defined width.)
## 3. Pages can be fixed width or liquid (stretchy) layouts.
## 4. Designers keep pages within 960-1000 pixels wide,
and indicate what the site is about within the top 600
pixels (to demonstrate its relevance without scrolling).
## 5. Grids help create professional and flexible designs.
## 6. CSS Frameworks provide rules for common tasks.
## 7.You can include multiple CSS files in one page.

# How does pair programming work?
While there are many different styles, pair programming commonly involves two roles: 
### 1.the Driver :
The Driver is the programmer who is typing , Handling the “mechanics” of coding, the Driver manages the text editor, switching files, version control 
### 2.the Navigator :
the big picture, what comes next, how an algorithm might be converted in to code
  considered as second screen to look up solutions and documentation, but should not be writing any code.
 ### four fundamental skills that help anyone learn a new language:
1. Listening: hearing and interpreting the vocabulary .
 2.  Speaking: using the correct words to communicate an idea Reading.
 3.  understanding what written language intends to convey. 
 4.  Writing producing from scratch a meaningful.
 # FUNCTIONS
 a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output
 allows you to define a block of code, give it a name and then execute it as many times as you want. A function can be defined using function keyword and can be executed using  operator. A function can include one or more *parameters.
 ## how to creat functions
 function declaration:
  1. The function keyword goes first.
  2. then goes the name of the function.
  3. a list of parameters between the parentheses .
  # methods : are actions that can be performed on objects.
  An object is a collection of properties, and a property is an association between a name (or key) and a value.
  ## how to creat object
1. Declaration − A variable declaration with a variable name with an object type
2. Instantiation − The 'new' keyword is used to create the object.
3.  call initialization  The 'new' keyword is followed by a to a constructor. This call initializes the new object.
 # quiz:
 1.  what is the link and what the link structuer ? 
 2. what are the four fundamental skills that help anyone learn a new language?
 3. how to creat functions?
 4. what the difference between the Driver and navigator?
 5. why we use a <div> elemnt?


