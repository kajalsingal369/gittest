import React from 'react';

class App9 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        //this.hdClk=this.handleClick.bind(this)
        this.timerTick=this.timerTick.bind(this);
    }
   
     
    timerTick(){
        this.setState((prevState)=>{
            return {count:prevState.count+1}
    } )

     }
     componentDidMount(){
        this.timer=setInterval(this.timerTick,1000)
        console.log("Component has mounted")
    }

    componentDidUpdate(prevProps,prevState){
        console.log("Component updated from ",+prevState.count+" to ", +this.state.count)
    }

    /*handleClick(){
        console.log("Im executed")
    }*/

    render(){
        return(<div>
            
        <h1>COUNT IS : {this.state.count}</h1>

        </div>)
    }

}

export default App9;

