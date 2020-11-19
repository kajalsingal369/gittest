import React from 'react'


class App18 extends React.Component{
    constructor(props){
        super(props)
        this.textInput=React.createRef();
        this.state={
            username:'',
            password:'',
            value:" "
        }
    }

    handleSubmit(e){
        // e.preventDefault();
        //this.setState({value:this.textInput.current.value})
       
        if(this.textInput.current.value==" " || this.passwordInput.current.value==" ")
        {
            this.setState({value:" empty form cannot be validated"})
        }
        else
        {
            this.setState({username:this.textInput.current.value})
            this.setState({password:this.passwordInput.current.value})
            this.setState({value:"success"})
        }
    }

  render(){
      return(
      <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
          Enter username:<input type="text"  ref={this.textInput}></input>
          Enter password<input type="password" ref={this.passwordInput}></input>
        <button>Submit</button>
        </form>
        <h1> {this.state.username}</h1>
      <h1>{this.state.password}</h1>
      <h1>{this.state.value}</h1>
      </div>)
  }
}

export default App18