# forms :
allow users to perform other functions online and enabling users to search.
# How Forms Work
A user fills in a form and then presses a button to submit the information to the server
1. The name of each form control is sent to the server along with the value the user enters or
selects.
2. The server processes the information using a programming language such as PHP, C#, VB.net,
or Java. It may also store the information in a database.
3. The server creates a new page to send back to the browser based on the information received.
# Form Structure:
<form> Form controls live inside a <form> element. This element should always carry the action
attribute and will usually have a method and id attribute too.
## action
Every <form> element requires an action attribute. Its value is the URL for the page on the
server that will receive the information in the form when it is submitted.
##  method
Forms can be sent using one of two methods: get or post.
## TEXT INPUT
<input> The <input> element is used to create several different form controls. The value of the type attribute determines what kind of input they will be creating.
##  type="password" When the type attribute has a value of password it creates a text box that acts just like a single-line text input, except the characters are blocked out.They are hidden in this way
## <textarea> The <textarea> element is used to create a mutli-line text input. Unlike other input elements this is not an empty element.
## <input> type="checkbox" Checkboxes allow users to select (and unselect) one or more
options in answer to a question.
## Drop Down List Box :
## <select> A drop down list box (also known as a select box) allows users to select one option from a drop down list.
## File Input Box :
<input>If you want to allow users to upload a file (for example an image, video, mp3, or a PDF),
you will need to use a file input box.
type="file"
## <input> type="submit" The submit button is used to send a form to the server.
## Image Button :
type="image" If you want to use an image for the submit button, you can give the type attribute a value of image. The src, width, height.
## Email & URL Input  :
type="email" If you ask a user for an email address allow visitors to enter email addresses and URLs
# Whenever you want to collect information from visitors you will need a form, which lives inside a<form> element.
# Information from a form is sent in name/value pairs.
# Each form control is given a name, and the text the user types in or the values of the options they select are sent to the server.
*************************
chapter 14 
Lists, Tables and Forms : There are several CSS properties that were created to work with specific types of HTML elements, such as lists, tables, and forms
# list-style-type : The list-style-type property allows you to control the shape or style
 of a bullet point .
 1. Unordered Lists
 2. ordered Lists 
 # list-style-image :
 The value starts with the letters url and is followed by a pair of parentheses. Inside the
parentheses, the path to the image is given inside double quotes.
# list-style-position :
styleposition property indicates whether the marker should appear on the inside or the outside of the box containing the main points.
## This property can take one of two values:
1. outside The marker sits to the left of the block of text. (This is the default
behaviour if this property is not used.)
inside The marker sits inside the box of text (which is indented).
# BORDER ON empty-cells :
 If you have empty cells in your table, then you can use the empty-cells property to
specify whether or not their borders should be shown.
# Gaps Between Cells : border-spacing, border-collapse The border-spacing property
allows you to control the distance between adjacent cells. By default, browsers often leave
a small gap between each table cell, so if you want to increase or decrease this space then
the border-spacing property allows you to control the gap.
# List markers can be given different appearances using the list-style-type and list-style image
properties.
# Table cells can have different borders and spacing in different browsers, but there are properties you can use to control them and make them more consistent.
#  Forms are easier to use if the form controls are vertically aligned using CSS.
#  Forms benefit from styles that make them feel more interactive
 
 ***************************
 # events
 When you browse the web, your browser registers different types of events. It's the browser's way of saying, "Hey, this just happened." Your script can then respond to these events.

# INTERACTIONS EVENTS TRIGGER 
 # CODE RESPONDS 
# CREATE EVENTS CODE TO USERS 

# User interface CUI) events
 occur as a result of interaction with the browser window rather than the HTML page contained within it
 # Events are the browser's way of indicating when something has happened (such as when a page has finished loading or a button has been clicked).
# Binding is the process of stating which event you are waiting to happen, and which element you are waiting for that event to happen upon.
# When an event occurs on an element, it can trigger a JavaScript function. When this function then changes the web page in some way, it feels interactive because it has responded to the user.
# You can use event delegation to monitor for events that happen on all of the children of an element. 
# The most commonly used events are W3C DOM events, although there are others in the HTMLS
# specification as well as browser-specific events

************
# quiz 
1. list three types of Form Structure ?
2. what is the three types of response for events ?
3. what is the meaning of events ?
