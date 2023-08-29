import React from 'react'
import UserClass from "./UserClass";


class About extends React.Component{

  constructor(props){
    super(props);

    console.log("Parent Constructor Called")
  }

  componentDidMount(){
    console.log("Parent ComponentDidMount")
}


  render (){

    console.log("Parent Render Called")

    return (
      <>
           <div>About</div>
           <UserClass name={"Eshita Raorane(class)"} age={"28"}/>
           <UserClass name={"Kalpit Raorane(class)"} age={"32"}/>
           </>
    )
  }
}

// const About = () => {
//   return (
//     <>
//     <div>About</div>
//     <UserClass name={"Eshita Raorane(class)"} age={"28"}/>
//     </>
//   )
// }

export default About