
! General Overview of the UI Design of App !

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



1. We can't use the react fragment inside the react fragment , because the innermost react fragment
will work only , outside will not work.


2. If we want to give the styling to the react using the React.Fragment we can't give , we have to
use div to give the styling to the react.


--------------------------------------------------------------------------------------------------------------------------------


Config Driven UI :- 

UI is driven by the config file , their we have to config the file to drive the UI 
for same briyani same card will be shown at different price point at different 
location. According to Data coming from the Backend their is change in the UI.



We need to find add key , as React does not identify the key value uniquely 

Don't use the index as the key value in React JS.

