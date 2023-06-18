# In this section we are going to cover the concept of the React Hooks


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


# Swiggy API :- https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING

# Two ways to fetch the Data using the API

1. Load the App -> Wait for the API (500ms) time to load the Data -> Render the UI

2. Load the App -> Render the UI -> Make the API call -> Re-Render the UI with recived API response
{ Better UX for the 2nd Approach }
[ 2nd Approach of the Fecthing the Data from the API we are using it , instead of 1st Approach ]


# useEffect(()=>{},[])

useEffect is simple javascript function , with two argument , one for the callback {} and other 
argument []-> is the dependency Array 

useEffect is called when the body component is render 
