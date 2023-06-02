1. What is NPM ?

Ans : - NPM ( Its not the Node Package Manager) , in the official site its show the random name
for NPM . NPM has no full form , apart from this NPM manage the package of the node , but doesn't
stand for the node package manager.

--------------------------------------------------------------------------------------------------------------------------------

2. package.json : Its a configuration file for the NPM package

--------------------------------------------------------------------------------------------------------------------------------

3. Bundler :- A bundler is a development tool that combines many JavaScript code files into a
single one that is production-ready loadable in the browser. A fantastic feature of a bundler is 
that it generates a dependency graph as it traverses your first code files.

(webpack, Parcel, vite)

create-react-app : use the webpack bundler to create a react app 

a. webpack-bundler : entery , output , module , plugins

c. Parcel : Parcel. js is an open-source bundler. It supports many popular languages like 
Typescript and SASS, and can also handle file types like images and fonts. Parcel comes with 
a few extra tools built-in: a development server, diagnostics, minification, and even image 
compression.

npm install -D parcel ( -D denotes the dev dependencies)

b. Vite :- Vite is a faster and lighter dev server and bundler than Webpack, specifically designed 
for modern JavaScript frameworks like Vue and React. Vite takes advantage of ES modules in the 
browser to create a feedback loop that allows for faster development and hot reloading.


--------------------------------------------------------------------------------------------------------------------------------

4. Dependency : When we install the app then we have two dependencies which will prompt to us
for any app we install 

a. Normal Dependency : It requires in dev and in production environments both for running the
application.
b. Dev Dependency : It generally requires only when we develop the app.

--------------------------------------------------------------------------------------------------------------------------------

5. Caret ( ^ )  and Tilde ( ~ )

a. Tilde (~ ) -> Approximately equivalent to version itself ,  will update you to all future patch 
versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

b. Caret ( ^ ) -> Compatible with the current version , will update you to all future minor/patch 
versions, without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0.


--------------------------------------------------------------------------------------------------------------------------------

6. What is the difference between package.json and package-lock.json ?

Ans:- 

1. In simple words packge.json take track of approx version of it , as it has caret on it ,
while package.lock.json take track of exact version of it.

--------------------------------------------------------------------------------------------------------------------------------

7. What is the transitive dependency ?
Ans :- 
A dependency that is not directly used in your project, but brought in by other third-party 
components.

Every node_modules project has its own separate package.json and all it has its own 
dependencies and it is called transitive dependency.
Notes :- node_modules is a collections of the dependencies.

--------------------------------------------------------------------------------------------------------------------------------

8. What is the difference between NPM and NPX commands?

Ans :- 

a. NPM : It helps us to install the packages or dependencies in package.json
npm install express/ nodemon / parcel / vite  or any other npm package

b. NPX : It helps us to execute the install package or dependencies over the localhost server. 
For eg: npx parcel index.html [ npx(command) , parcel(package ) , index.html (base file)]

--------------------------------------------------------------------------------------------------------------------------------

9. What happen when we install the react and remove the CDN link ?

Ans:- 

Simple answer : After the installation of the react and remove the CDN link , then function or
actions performed in the react , is removed , don't able to creatElement or render the element.

Solution : We need to import react from the node_modules folder.
[ import React from " react "  ] -> Syntax

Also in the base file of the html we need to provide the type of folder we are importing
<script src="./App.js" type="module"> :-> using this file we used to get rid of errors

--------------------------------------------------------------------------------------------------------------------------------

10. When we start developing something ,and we are using the parcel as bundle module , then 
it automatically refresh the page , to give realtime visulization.

--------------------------------------------------------------------------------------------------------------------------------

11. Pracel Helping us with lots of information

-> Dev Build
-> Local Server
-> HMR -> Hot Module Replacement ( Automatically Refresh the text , when we save it )
-> File Watching Alogrithm used by Pracel written in C++.
-> Caching : Faster Build Experience
-> Image Optimization
-> Minification of File
-> Bundling of File
-> Compressing of File
-> Consistent Hashing
-> Code Spliting
-> Differntial Bundling -> support for the older browser
-> Diagnostics [ Beautify the Error Logs on the UI ]
-> Error Handling
-> Way to Host the App on HTTPS [ npx parcel index.html --https ]
-> Tree Shaking Algorithms : - Parcel will remove the unused code for you .
-> Creates the differnt build for dev and production bundles.

BUILD DEVELOPMENT AND PRODUCTION BUILD

To generate the [development] build : [ npx parcel index.html ]
To generate the [production] build : [ npx parcel build index.html ] and 
remove "main":"App.js" from package.json

Notes :-  Apart from the React , their is more things in Bundler which is helping 
the web app conating the react js library making it faster than normal app.


Important:- 

When we run the command "npx parcel index.html" parcel will generate a dist folder conatins the 
production code from when we open the localhost from their its coming for us. When we save 
the file then it use the folder .parcel-cache to perform HMR.

--------------------------------------------------------------------------------------------------------------------------------

12. BrowserList

In package.json , if we provide the browser list for which it should work will be defentely 
work with the listed browser list , but for rest of the browser list it might work or not.




--------------------------------------------------------------------------------------------------------------------------------



