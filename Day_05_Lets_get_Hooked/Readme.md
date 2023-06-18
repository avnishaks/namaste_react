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



# Two types of Export/Import:-

- Default Export/ Import

export default Component;
import Component fron "path";

- Named Export/ Import

export const Component;
import { Component } from "path";



# React Hooks:- 

Hooks is a normal JavaScript Utility Function given by React 

There are serveral hooks in React , but the most important is 2 of them we using 99% of times

- useState() => Super-powerful State variable in React
It is imported from 'react' module , just like named import
Syntax:- import {useState} from 'react';

when state variable is updated then the react re-render the component

with the help of useState() we can keep UI layer sync with the Data layer.

useState() will return the restList in form of Array

const arr=useState(restList);

listOfRestaurants=arr[0]
setlistOfRestaurants=arr[1]

or 

const [listOfRestaurants,setlistOfRestaurants] = arr;

- useEffect() => 

# React implementation behind the scenes

- Reconciactions Algorithm ( React Fiber )

# Actual DOM :- div , img tags etc..
# Virtual DOM : - Represntaion of the Actual DOM (Nothing just a normal Javascript Object)
console.log(<Body/>) -> It will print the Object 

res-container -> 15 restaurant card -> UI changes from 15 cards to Filter 3 card 


When we have 15 restaurant card , then react create the virtual DOM of it.


# Diff Algorithm 

It will find the difference between the update Virtual DOM and the previous Virtual DOM.

If we have 7 restaurant card , after the clicked button it show 3 restaurant card , it actually
calculates the difference of restaurant cards , and render the cards.



# Facts About React

1. React  is doing efficient DOM manipulation , because it has a virtual DOM 
2. React is Faster because of virtual DOM , and perform Diff Algorithm.

