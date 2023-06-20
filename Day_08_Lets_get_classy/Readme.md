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