import { Component } from "react"
//import User from "./User"
import UserClass from "./UserClass"
class About extends Component  {
   constructor(props){
    super(props)
    //console.log("parent Constructor")
   }
   componentDidMount(){
    //console.log("parent cpmponentDidMount")
   }
   componentWillUnmount(){
    console.log("Component unmount")
   }
   render(){
    //console.log("parent render")
    return(
        <div>
            <h1>About you</h1>
            <UserClass name="kishore CC" location="HYD"/>
        </div>
    )
}
}
export default About