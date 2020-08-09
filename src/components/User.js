import React, { Component } from 'react';
import { MDBContainer, MDBRow } from "mdbreact"; 
import DataTable from 'react-data-table-component';

const columns = [
    {
      name: 'Physicians Name',
      selector: 'userId',
      sortable: true,
    },
    {
      name: 'Specialization',
      selector: 'title',
      sortable: true,
      left: true,
    },
    {
      name: 'Department',
      selector: 'body',
      sortable: true,
      right: true,
    },
  ];

class User extends Component {
    state = {
        data: [],
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => response.json())
        .then(data => this.setState({data}))


        let btn = localStorage.getItem('login')
        if(!btn){
            window.location.replace('/login')
        } 
    }

    render() { 
        const { data } = this.state;
        return (
            <MDBContainer className="mx-0">
                <MDBRow className="w-100 justify-content-between align-items-center">
                </MDBRow>
                <DataTable className="m-0"
                    columns={columns}
                    data={data}
                />
        </MDBContainer>
         );
    }
}
 
export default User;