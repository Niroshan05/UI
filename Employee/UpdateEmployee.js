import React, { Component } from 'react'

export default class UpdateEmployee extends Component {
    constructor(){
        super();
        this.state={
            Employee:[],
            employeeId:'',
            firstName:'',
            lastName:'',
            e_Mail:'',
            contactNumber:'',
            department:'',
            dateJoined:'',
            leaveBalance:'',
            password:'',
            checkPassword:''
        
        }
        this.update=this.update.bind(this);
        this.handleChanges=this.handleChange.bind(this);
    }
    
    update()
    {
        let employeeId=this.state.employeeId;
        fetch("http://localhost:50733/api/EmployeeDetails/UpdateEmployee/"+employeeId,
        {
            "method":"PATCH",
            "headers": 
            {
                "content-type":"application/json",
                 "accept":"application/json"
            },
    body:JSON.stringify({

            // emplyeeid:this.state.emplyeeid,
            firstName:this.state.firstName,
            lastName:this.state.lastName ,
            e_Mail:this.state.e_Mail,
            contactNumber:this.state.contactNumber,
            department:this.state.department,
            dateJoined:this.state.dateJoined ,
            leaveBalance:this.state.leaveBalance ,
            password:this.state.password ,
            checkPassword:this.state.checkPassword

          })

    }).then(response=>response.json()).then(response=>{
        alert("data updated");
    })
    .catch(err=>{
        console.warn(err);
    })
    }

    handleChange(changeObject)
    {
        this.setState(changeObject);    
    }

    
    render() {
        const {Employee}=this.state;
        return (
            
            <><div className="App-header">
          <form>
            <table  >
            <tr >
                <td ><label >Employee ID</label>
                <input className="spacer" type="text" name="employeeId" onChange={(e)=>this.handleChange({employeeId:e.target.value})}></input></td>
                </tr>
              <tr >
                <td ><label >First Name</label>
                <input className="spacer" type="text" name="firstName" onChange={(e)=>this.handleChange({firstName:e.target.value})}></input></td>
                </tr>
                <tr>
                <td ><label >Last Name</label>
                <input className="spacer" type="text" name="lastName" onChange={(e)=>this.handleChange({lastName:e.target.value})}></input></td>
                </tr>
                <tr>
                <td><label >E Mail</label>
                <input className="spacer" type="text" name="e_Mail" onChange={(e)=>this.handleChange({e_Mail:e.target.value})}></input></td>
                </tr>
                <tr>
                <td>
                  <label >Contact Number</label>
                  <input className="spacer" type="text" name="contactNumber"  onChange={(e)=>this.handleChange({contactNumber:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >Department</label>
                  <input className="spacer" type="text" name="department"  onChange={(e)=>this.handleChange({department:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >dateJoined</label>
                  <input className="spacer" type="date" name="dateJoined"  onChange={(e)=>this.handleChange({dateJoined:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >leaveBalance</label>
                  <input className="spacer" type="text" name="leaveBalance"  onChange={(e)=>this.handleChange({leaveBalance:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >password</label>
                  <input className="spacer" type="password" name="password"  onChange={(e)=>this.handleChange({password:e.target.value})} ></input>
                  </td>
              </tr>
              {/* <tr>
                <td>
                  <label >check password</label>
                  <input className="spacer" type="password"  name="checkPassword"  onChange={(e)=>this.handleChange({checkPassword:e.target.value})}></input>
                  
                  
                </td>
              </tr> */}
              
              
              <tr>
                <td><button type="button" onClick={(e)=>this.update(e)}>Update</button>
                
                 </td>
              
              </tr>
            </table>
          
          </form>
          </div>
          </>
             
        );
        

    }
}
