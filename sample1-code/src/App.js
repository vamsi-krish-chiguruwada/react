import React from 'react';
import './App.css';
import Comp1 from "./comp1";

class App extends React.Component {

  state = ({username:"",
            pass:"",
            auth:false,
            list:["item1","item2","item3","item4","item5","item6"]
          })

 authentication = (event) => {
    event.preventDefault();
    if((this.state.username === "peopler")&&(this.state.pass === "interview")){
        this.setState({auth:true});
    }else{
      alert("wrong pin/username");
    }
  }

  removeItem = (event) => {
    alert("are you sure! delete anyway ? ")
    let index = this.state.list.findIndex((item)=>item===event.target.parentElement.id);
    let temp =  [...this.state.list];

    temp.splice(index,1);
    this.setState({list:temp});


    
  }

  

    render(){
      return(
      <div className="App">
      <header className="App-header">
        <p>
          hello,
        </p>
        
        {this.state.auth ?
        
        <div>
          <Comp1 removeItem = {this.removeItem} list = {this.state.list} />
          <button onClick = {()=>this.setState({auth:false, username:"", pass:""})}>sign out</button>
        </div>:
        
        <div>
          <form>
            <input onChange ={event=>this.setState({username:event.target.value})} type = "text" placeholder = "user name"/>
            <input onChange ={(event)=>this.setState({pass:event.target.value})}type = "password" placeholder = "password"/>
            <input onClick = {this.authentication} type="submit" value = "submit"/>
          </form>
        </div>
        }
        
        
 
      </header>
    </div>
  )  
  }

  
}

export default App;
