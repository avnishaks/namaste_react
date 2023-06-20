// Class Based Component 
import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    render() {
        const { count, value } = this.state;
        return (
            <div className="user-card">
                <h2>Count : {count}</h2>
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