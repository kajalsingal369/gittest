import React from 'react'
class App19 extends React.Component {
    constructor(props) {
      super(props);
  
      this.username = React.createRef();
      this.password = React.createRef();
      this.phone=React.createRef();
      this.email=React.createRef();
      this.state = {
        errors: []
      };
    }
  
    handleSubmit(event) {
      const username = this.username.current.value;
      const password = this.password.current.value;
      const phone= this.phone.current.value;
      const email=this.email.current.value;
      const errors = this.handleValidation(username, password, phone, email);
  
      if (errors.length > 0) {
        this.setState({ errors });
        return;
      }
      
    };
  
    handleValidation  (username, password , phone, email)  {
      const errors = [];
      if (username.length === 0) {
        errors.push("Username cannot be empty");
      }
      
      if (password.length < 6) {
        errors.push("Password should be at least 6 characters long");
}
if (phone.length < 10 ) {
    errors.push("Phone number should be at least 10 characters long");
}
if ( phone.length==0) {
    errors.push("Phone number cannot be empty");
}
if(!email.includes('@') )
{
  errors.push("email should contain @ in its format");
}
if( email.length==0)
{
  errors.push("email field cannot be empty");
}
      
      return errors;
    };
  
    render() {
      const { errors } = this.state;
      return (
        <div>
          <h1>SIGN UP FORM</h1>
            {errors.map(error => <p key={error}>{error}</p>)}
            <div>
              <label>Username:</label>
              <input type="text" ref={this.username} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" ref={this.password} />
              <div>
              <label>Phone Number:</label>
              <input type="text" ref={this.phone} />
            </div>
            <div>
              <label>Email:</label>
              <input type="text" ref={this.email} />
            </div>
            </div>
            <div>
              <button onClick={this.handleSubmit.bind(this)}>SIGNUP</button>
            </div>
          
        </div>
      );
    }
  }

  export default App19;
