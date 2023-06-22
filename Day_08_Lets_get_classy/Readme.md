
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


# Research Topic 
1. Super props
2. async not used with useEffect()

# Functional Component 

const User = () => {
    return (
        <div className="user-card">
            <h2>Name: Avnish</h2>
            <h2>Location : Vaishali </h2>
            <h2>Contact : avnishaks </h2>
        </div>
    )
}

export default User;



# ClassBased Component

import React from "react"

class UserClass extends React.Component {
    render(){
            return (
                <div className="user-card">
                    <h2>Name: Avnish</h2>
                    <h2>Location : Vaishali </h2>
                    <h2>Contact : avnishaks </h2>
                </div>
            )
    }
}

export default UserClass;


# props in ClassBased Component 

<UserClass name={"Avnish Kumar (ClassBased Component)"}/>

// Class Based Component 
import React from "react"

class UserClass extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
            return (
                <div className="user-card">
                    <h2>Name: {this.props.name}</h2>
                    <h2>Location : Vaishali </h2>
                    <h2>Contact : avnishaks </h2>
                </div>
            )
    }
}

export default UserClass;


# props in Function Based Component

<User name={"Avnish Kumar (Functional Component)"}/>

const User = (props) => {
    return (
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <h2>Location : Vaishali </h2>
            <h2>Contact : avnishaks </h2>
        </div>
    )
}

export default User;

# state variable in Functional component

// Function Based component

import { useState } from "react"; -> for using the state variable import it

const User = (props) => {
    const [count,setcount]=useState(0); -> intialized the state variable
    return (
        <div className="user-card">
            <h2>Count = {count}</h2>
            -> update the state variable using the set params 
            <button onClick={() => {
                    setcount(count+1)
                }}>
                    Increase Count
                </button>
                <span>  </span>
                <button onClick={() => {
                    if(count>0){
                        setcount(count-1)
                    }
                }}>
                    Decrease Count
                </button>
            <h2>Name: {props.name}</h2>
            <h2>Location : Vaishali </h2>
            <h2>Contact : avnishaks </h2>
        </div>
    )
}

export default User;


# state variable in ClassBased Component

// Class Based Component 
import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        -> declaring the state variable
        this.state = {
            count: 0,
            value :10 
        }
    }
    render() {
        const { count, value } = this.state; -> destructing state variable 
        return (
            <div className="user-card">
                <h2>Count : {count}</h2>
                -> Modifying the state variable , don't update the state variable directly
                use the setState to modify it 
                <button onClick={() => {
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>
                    Increase Count
                </button>
                <span>  </span>
                <button onClick={() => {
                    if(count>0){
                        this.setState({
                            count:this.state.count-1,
                        })
                    }
                }}>
                    Decrease Count
                </button>
                <h2>Name: {this.props.name}</h2>
                <h2>Location : Vaishali </h2>
                <h2>Contact : avnishaks </h2>
            </div>
        )
    }
}

export default UserClass;


# React Life Cycle Method Class Based Components

1. Constructor 
2. Render Method
3. componentDidMount Method => it is used for making the API calls 


/ Class Based Component 
import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

        console.log("child :- UserClass Constructor"); -> 1. Constructor call
    }

    componentDidMount(){
        console.log("child:- UserClass ComponentDidMount"); 3. componetDidMount call
    }

    render() {
        console.log("child :- UserClass Render"); 2. Render Method call

        const { count, value } = this.state;
        return (
            <div className="user-card">
                <h2>Count : {count}</h2>
            </div>
        )
    }
}

export default UserClass;

"" If we have a parent child relation "" , then :- >

1. Parent Constructor
2. Parent Render Method
3. Child Constructor
4. Child Render Method
5. Child componentDidMount
6. Parent componentDidMount


" If we make a two call for the child class "


# React Life cycle Diagram 

React Life cycle Diagram has two phases :- 

1. Render Phase :- Pure and has no side effect. May be paused , restarted or aborted by React.
[ Constructor / Render ]

2. Commit Phase :- Can work with DOM run side effects, schdule update.
[ componentDidMount ]

Commit Phase deals with DOM manipulation , for which its take the time , so React batch all the
Render Phase of child class , together and perform commit phase of each child class one by one.


" If we make a two call for the child class "

First Render phase ( Constructor / Render ) is completed then the commit phase happen ( componentDidMount )

import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props){
        super(props)

        console.log("About Class Constructor");
    }

    componentDidMount(){
        console.log("About Class Mount");
    }

    render(){

        console.log("About Class Render")
        return(
            <div>
                <h3>Functional Component</h3>
                <User name={"Avnish Kumar (Functional Component)"}/>
                <br></br>
                <h3>Class Based Component</h3>
                <UserClass name={"First"}/>
                <UserClass name={"Second"}/>
                <UserClass name={"Third"}/>
    
            </div>
        )
    }
}

export default About;


Output :- 


... Render Phase Parent ...
About class constructor -> parent constructor
About class render  -> parent render


... Render phase of First / Second / Third Child ...

... Render phase First Child ...
First Child Constructor
First Child Render


... Render phase Second Child ...
Second Child Constructor
Second Child Render

... Render phase Third Child ...
Third Child Constructor
Third Child Render

... componentDidMount of First / Second / Third child ...
First Child componentDidMount
Second Child componentDidMount
Third Child componentDidMount



... componentDidMount of parent  ...
About class componentDidMount




# API call in Class Based Component

1. We can make the componentDidMount Function async , and make the api call.

React Life cycle with API data 

Mounting -> Showing HTML on UI [ When we come to the page then it is called ]
UnMounting -> Disabling HTML on UI [ When we go from the page then it is called ]

React Life Cycle 

1. ----- Mounting ----- { Showing HTML on UI [ When we come to the page then it is called ] }

Constructor (Dummy Data)
Render (Dummy Data)
        <HTML Dummy Data>

componentDidmount
        <API Call>
        <this.setState> -> State variable is updated

2. ----- Updating ------

    render (API Data)
    <HTML API data>

componentDidupdate
syntax :- 
componentDidUpdate(){
        console.log("Component Did Update")
}

3. ---- Unmounting ----- [ Disabling HTML on UI [ When we go from the page then it is called ] ]
syntax:- 
componentWillUnmount(){
    console.log("Component Will Unmount")
}

componentwillmount


# what is the need of componentDidmount and componentWillUnmount in class based component ?

componentDidmount:- when we enter the page console data start printing for us.
syntax:-
componentDidMount(){
       this.timer=setInterval(()=>{
            console.log("AVNISH KUMAR SINGH")
       },1000)
}

componentWillUnmount:- when we leave the page the timer stop for printing the console data.
syntax :- 
componentWillUnmount(){
        clearInterval(this.timer)
}

# How we handle the mouting and unmounting in Function Based component ?

 useEffect(()=>{
        -- Mounting ---

        const timer=setInterval(()=>{
            console.log("AKS ROCKS");
        },1000)
       
        -- Unmounting ---

        return()=>{
           clearInterval(timer)
        }

},[])



