import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props){
        super(props)

        //console.log("About Class Constructor");
    }

    componentDidMount(){
        //console.log("About Class Mount");
    }

    render(){

        //console.log("About Class Render")
        return(
            <div>
                <h3>Functional Component</h3>
                <User name={"Avnish Kumar (Functional Component)"}/>
               
    
            </div>
        )
    }
}

export default About;