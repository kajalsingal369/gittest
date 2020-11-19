import React,{Component} from "react";
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
import "./file.css"
import  htmlContent from "./Contact.html"
import {stockData} from "./data.js"
//import "./style.scss"

const myconf = require('./myConfig.json5');
class App12 extends Component {
  constructor(props){
      super(props)
      console.log("myConfig",myconf.default.env)
  }



    render() {
      return (
      <Router>
          <div>
            <h2>Welcome to React Router Tutorial</h2>
            <nav>
            <ul >
              <li><Link to={'/'} > Home </Link></li>
              <li><Link to={'/about'} >About</Link></li>
              <li><Link to={'/contact'} >Contact</Link></li>
<li><Link to={'/signin'} >SignIn</Link></li>
<li><Link to={'/signup'} >SignUP</Link></li>
              
            </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
<Route path='/SignIn' component={SignIn} />
<Route path='/SignUp' component={SignUp} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
  


class Home extends Component {
        render() {
          return (
              <div>
                <h2>Home</h2>
              </div>
          );
        }
      }
    

    
    class About extends Component {
            render() {
              return (
                  <div>
                     {stockData.map((data,key)=>{
            return(
            <div key={key}>
                {data.company}  ,{data.stockPrice} ,
                {data.stockPrice}

            </div>)
        })}
                  </div>
              );
            }
          }
        

        class Contact extends Component {
                render() {
                  return (
                      <div>
                       <div dangerouslySetInnerHTML={{__html:htmlContent}}></div>
                      </div>
                  );
                }
              }
            class SignIn extends Component {
                    render() {
                      return (
                          <div>
                            <table border="1">
                    <tr>
                        <td>ENTER YOUR ID:</td>
                        <td><input type="text"></input></td>
                   </tr>
                   <tr><td>ENTER PASSWORD:</td>
                   <td><input type="password"/></td>
                   </tr>
                   <tr>
                       <td><input type="button" value="SUBMIT"></input></td>
                   </tr>
                </table>
                          </div>
                      );
                    }
                
                  }
                class SignUp extends Component {
                        render() {
                          return (
                              <div>
                                <table border="1">
                        <tr>
                            <td>ENTER YOUR ID:</td>
                            <td><input type="text"></input></td>
                       </tr>
                       <tr><td>ENTER PASSWORD:</td>
                       <td><input type="password"/></td>
                       </tr>
                       <tr>
                           <td><input type="button" value="SUBMIT"></input></td>
                       </tr>
                    </table>
                              </div>
                          );
                        }
                    
                      }
                    
            



export default App12;
