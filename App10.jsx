import React from "react"
class App10 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          names:" "
        }
    
        this.nameUpdate=this.nameUpdate.bind(this);
      }


     nameUpdate(){
         var names=document.getElementById("name").value;
         document.getElementById("name").value=" ";
 
         
        this.setState((prevState)=>{return  { names:this.state.names}
    }
)}

     componentDidUpdate(prevProps,prevState){
        console.log("Component updated from ",+prevState.names+" to ", +this.state.names)
    }
    

    
      render() {
        return (
     
         <div><input type="text" id="name" />
         <button onClick={this.nameUpdate}> ENTER</button>
     
       </div>
    
        );
      }
}

export default App10;