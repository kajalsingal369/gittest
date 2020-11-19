import React from "react"
class App4 extends React.Component{
  constructor(props){
      super(props)
      this.state={
          name:"eshan",
          id:"101",
          salary:"2000"
      }
  }


    render(){
        return(
        <div><h1>{this.state.name}{this.state.id}{this.state.salary}</h1>
            
           
            </div>
        );
    }
}

export default App4;
