import React from "react"
import axios from "Axios"
class App11 extends React.Component{

    constructor(props){
        super(props)
        this.state={
            records:[]
        }
        //this.search=this.search.bind(this)
    }
    /*search(){
        this.setState({ records:responses[2].data})
        var value=[]
        var str=" "
         value.forEach(element => {
            
        });
        var text= document.getElementById("seacrh_txt").value;
        
        for(i=0; i<value.length; i++){
            var val=value[i].startsWith(text);
            if(val==true)
            {
             str+=value[i];
            }
         
        }
       

    }*/

    componentDidMount(){
        const apiurl='https://api.github.com/users/hacktivist123/repos';
        // fetch(apiurl)
        // .then((response)=> response.json())
        // .then((data)=>console.log("RECORDS are  ",data))

        /*axios.get(apiurl)
        .then((response)=>{
            //console.log(response.data)
            this.setState({
                records:response.data
            })
            console.log(this.state.records)
        })
        .catch(error=>{
            console.log("ERROR")
        })*/
        const urlone=axios.get("http://jsonplaceholder.typicode.com/users/")
    
        const urlsecond=axios.get("https://api.github.com/users/hacktivist123/repos")
         const urlthird=axios.get("http://localhost:4000/users")

        axios.all([urlone,urlsecond,urlthird]).then(axios.spread((...responses)=>
        {
            console.log("First",responses[0].data)
            console.log("Second",responses[1].data)
            console.log("Third",responses[2].data)
            
            this.setState({ records:responses[2].data})

        }
        ))

    }
    render(){
    return(<div>
       Enter record: <input type="text" id="search_txt" /> 
       <button >SEARCH</button>       
        <ul>{
    this.state.records.map(rec=><li>{rec.first_name}  , {rec.last_name} ,  {rec.email}</li>)
        }</ul></div>)
    }
}

export default App11;
