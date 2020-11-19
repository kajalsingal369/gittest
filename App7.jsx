import React from "react"
class App7 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          title:"React state example"
        };
      }
    
    toggleTitle(){
        if(this.state.title==" "){
            this.setState({title:"React state example"})
            
        }
        else
        this.setState({title:" "})
    }

      render() {
        return (
    <div>     
         <div><input type="checkbox" id="showTitle" onClick={()=>this.toggleTitle()} defaultChecked />
       <label htmlFor="showTitle">show title</label>
       </div>
        <h1>{this.state.title}</h1>
      </div>
        );
      }
}

export default App7;

