
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

# Custom Hooks

Custom Hooks is nothing just normal utility functions.

To get understand react about hooks we use starting character "use" To get know the React it is Hook.

1. Create a seperate file for the util folder for the custom hook , with starting name as "use".
2. import the hooks in the file where it is required.




# Chunking , Code Spliting , Dynamic Bundling ,Lazy Loading , OnDemand Loading, Dynamic import ( All means same )

Breaking / Spliting the App into small chunks 

# lazy loading concept

If we want seperate bundle for the component , then we lazy load the component 

1. importing  the file is different 

-> first import lazy and suspense from the React , lazy is used importing the path while 
suspense is used to wrap the component

-> syntax for lazy : 
const Grocery =lazy(()=>import("./components/Grocery"))

-> syntax for suspense : 
<Suspense fallback={<h1>Loading .... Grocery... Wait ... Wait </h1>}><Grocery/></Suspense> 


