import User from "./User";
import UserClass from "./UserClass";

const About=()=>{
    return(
        <div>
            <h3>Functional Component</h3>
            <User name={"Avnish Kumar (Functional Component)"}/>
            <br></br>
            <h3>Class Based Component</h3>
            <UserClass name={"Avnish Kumar (ClassBased Component)"}/>

        </div>
    )
}

export default About;