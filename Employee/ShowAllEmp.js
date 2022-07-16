import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';

export default class ShowAllEmp extends Component {
    constructor(){
        super();
        this.state={employee:null}
    }
    Showall()
    {
        
        fetch('http://localhost:50733/api/EmployeeDetails/Allemp').then(res=>res.json())
        .then(result=>{
            this.setState({employee:result})
        })
    }
    componentDidMount()
    {
        this.Showall();
    }
    render() {
        return (
            <>
            <Table striped bordered hover>
                <thead>
                
            <tr>
            <th>Employee Id</th>
            <th>full name</th>
            {/* <th>First Name</th>
            <th>Last Name</th> */}
            <th>E_Mail</th>
            <th>Phone number</th>
            <th>Department</th>
            <th>Date Joined</th>
            <th>Leave Balance</th>
            <th>Password</th>
            </tr>
           </thead>

            {
            this.state.employee?this.state.employee.map(x=>
                <tbody>
                <tr>
                    
                <td> {x.employeeId} </td>
                <td>{x.firstName+"  "+x.lastName}</td>
                
                <td> {x.e_Mail} </td>
                <td> {x.contactNumber} </td>
                <td> {x.department} </td>
                <td> {x.dateJoined} </td>
                <td> {x.leaveBalance} </td>
                <td> {x.password} </td>
                </tr>
                </tbody>
                
                ):null
                }
            </Table>
            </>
        )
    }
}
