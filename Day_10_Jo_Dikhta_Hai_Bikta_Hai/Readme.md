
# General Overview of the UI Design of App 

{

    Header :- 
        - Logo ( Tittle )
        - Nav Items ( Right Side )
        - Cart

    Body :- 
        - Search Bar
        - Resturant List
            - Resturant Card
                - Image
                - Name
                - Rating
                - Cusines
    
    Footer :- 
        - link
        - copyright
}


SRP -> Single Responsibility Principle ( By using this we can debug the code easily and resuable , maintainable and testable)

# Adding CSS to our Applications 

-> SCSS / SASS 
-> Style- Component for Adding CSS
-> Material UI
-> Chakra UI
-> Ant Design
-> Bootstrap

# Tailwind CSS

Configure the Tailwind CSS using Parcel 
npm install -D tailwindcss postcss -> install tailwindcss and postcss to tranform CSS to use in JS File
npx tailwindcss init -> intialized the tailwind.config page after invoking the tailwindcss

Through postcssrc , our parcel understand the Tailwind

Tailwind offer the class name for every css , that is required to used in the JSX or HTML file.

Suppose if we want to change the background of the browser , then we use seperate CSS class 
that is going to be used directly , if we want to change the width  , we can use that width for it.


