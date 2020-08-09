import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class Sidenav extends Component {
    state = {ifLogin:false}
    componentDidMount(){
      let btn = localStorage.getItem('login')
      if(btn){
       this.setState({ifLogin:btn})
      } 
    }
    btnChanger = () =>{
     if(this.state.ifLogin){
       localStorage.removeItem('login')
         window.location.replace('/login')
      }else{
       window.location.replace('/login')
      }
    }
    render () {
     return (
       <div>
        <Nav defaultActiveKey="/home" className="flex-column nav">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/user">User</Nav.Link>
          <Nav.Link onClick={()=>this.btnChanger()}>{this.state.ifLogin ?'Log Out' : 'Log In'}</Nav.Link>
        </Nav>
       </div>
     );
   }
 }
 
 export default Sidenav;