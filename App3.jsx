import React from "react"
import PropsTypes from 'prop-types'
function App3(){
    return <Greeting />
}


function Greeting(props){
    return(
        <p>
            Hello I'm {props.name}, a {props.age} years old {props.occupation}
        </p>
    )
}


Greeting.defaultProps={
    name:"Tanish",
    age:"20",
    occupation:"Student"
}


Greeting.prototype={
    name: PropsTypes.string.isRequired,
    age:PropsTypes.number.isRequired,
    occupation:PropsTypes.string.isRequired
}



 export default App3;






/*class App3 extends React.Component{
    render(){
        return(
            <div><p>PROPS EXAMPLE   </p>
            <h1>{this.props.empid}</h1>
            <h1>{this.props.ename}</h1>
            
    
               
            </div>
        );
    }
}*/


