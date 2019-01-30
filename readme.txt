COMP 1930: WorkEasy!
Set F: Group 7

Francis Chan
Younga Park
Tyler Tsui


css folder:

Location for all css related files, including files that add the bootstrap library.


js folder:

Location for all javascript related files, including most firebase related operations.


mac text document:

Enables mac users to run Git successfully.


README.md

The read me file once Git has been initialized.


signup.html

File that contains all html elements that make up the core of the email signup for the
WorkEasy website. All the page's logic is performed through the signup.js file in the 
js folder.


tutorial_start.html

File that contains all html elements that make up the core of the welcome page, including
links to the profile builder and search page. 


form_submit.html

File that contains all html elements that make up the core of the profile creation page,
populated through the use of html's form element. Pushes data entered to firebase database
under the user's unique uid that they obtained through the signup process. All the page's 
logic is performed through the form_submit.js file in the js folder.


form_experience.html

File that contains all html elements that make up the core of the experience entry page,
populated through the use of html's form element which allows for a dynamic addition when
necessary. Pushes all data collected to the firebase database under the user's unique uid
that they obtained through the signup process. All the page's logic is performed through 
the form_experience.js file in the js folder.


search.html

File that contains all html elements that make up the core of the search page. Passes the 
search parameter to the search results page. All the page's logic is performed through the 
search.js file in the js folder.


seach_result.html

File that displays all search results obtained through users' search using html elements.
Connects to firebase database under the search tag and pulls appropriate data depending on 
users'search parameters. All the page's logic is performed through the search_result.js 
file in the js folder.


job_posting.html

File that contains all html elements that make up the core of the job posing page, populated
through the use of html's form element. Pushes data entered to firebase database under the
job tag. All the page's logic is performed through the job_posting.js file in the js 
folder.
