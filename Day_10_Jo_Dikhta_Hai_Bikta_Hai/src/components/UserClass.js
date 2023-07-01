// Class Based Component 
import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           userInfo:{
               name: "avnish",
               location:"default",
           },
        }

        console.log(this.props.name + " child Constructor");
    }

    async componentDidMount(){
       // console.log(this.props.name+ " child ComponentDidMount");
       const data=await fetch("https://api.github.com/users/avnishaks");
       const json=await data.json();
       this.setState(
            {
                userInfo:json
            }
       )

       console.log(json)

       this.timer=setInterval(()=>{
            console.log("AVNISH KUMAR SINGH")
       },1000)
    }

    componentDidUpdate(){
        
        console.log("Component Did Update")
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("Component Will Unmount")
    }

    render() {
       console.log(this.props.name+ " child Render")
       const {name,location,avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h2>Location : {location} </h2>
            </div>
        )
    }
}

export default UserClass;