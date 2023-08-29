import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log("props",props);

        this.state = {
            count : 1,
        };
        console.log("CHild Constructor Called")
    }

    componentDidMount(){
        console.log("Child ComponentDidMount")
    }

    render () {
        const {count} = this.state;                        {/*First method state*/}
        const {name} = this.props;                        {/*First method props*/}

        console.log("Child Render Called")

        return (
            <div className="user-card">
                <h1>Count: {count}</h1>  
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>Click me </button>                  {/*First method state*/}
                <h1>Count: {this.state.count}</h1>           {/*Second method state*/}
                <h2>Name: {name}</h2>                     {/*First method props*/}
                <h3>Age: {this.props.age}</h3>             {/*Second method props*/}
            </div>
        )
    }
}

export default UserClass;