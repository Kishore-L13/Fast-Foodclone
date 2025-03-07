import React, { Component } from 'react'

export default class UserClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0,
       useInfo:{     login:"dummy",
            avatar_url:"https://lh3.googleusercontent.com/ogw/AF2bZyi4n406pTKM2JBqynInf0DVPxE11_ctSnYKq9KFg-G3lvc=s32-c-mo",
            id:"2139531"
        }
    }
        //console.log("child constructor")
    }
    async componentDidMount(){
        //console.log("child cpmponentDidMount")
        const data = await fetch("https://api.github.com/users/Kishore-L13")
        const json = await data.json()
        console.log(json)
        this.setState({useInfo:json})
       }
  render() {
    const {name,location} = this.props;
    const {count} = this.state
    const {login ,avatar_url, id} = this.state.useInfo
    console.log("child render")
    return (
        <div className="user-card">
        <h1>Count:{count}</h1>
        <button onClick={() =>{
            //NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
                count:this.state.count+1,
            })
        }}>Increase</button>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <p>State value : Login-{login} , Id:{id} , IMG:{avatar_url}</p>
        <h4>Contact : @BLR</h4>
    </div>
    )
  }
}
