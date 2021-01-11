
import React, { Component } from 'react';
import { APIService } from '../api/Api';
import { Link } from 'react-router-dom';


interface IState {
    userID?:number;
    username:string;
    password:string;
    userEmail:string;
    isUsernamedoesntExist:boolean;
    isAlertVisible:boolean;
    isPassVisible:string;
    isFormHidden:boolean;
    isUserCreated:boolean;
    isUserCreatedError:boolean;
    isUsernamedoesntExistButton:boolean;
    i:number ;
    usersArray:any[];


}

class AdminPanel extends Component <{}, IState> {
    
    myAPIService = new APIService();
    constructor(props: {}, myAPIService:APIService){
        super(props );
        this.getAllUsers();
        this.state = {
            username:"?????????",
            password:"",
            userEmail:"",
            isUsernamedoesntExist: true,
            isAlertVisible: true,
            isPassVisible: "password",
            isFormHidden: false,
            isUserCreated: true,
            isUserCreatedError: true,
            isUsernamedoesntExistButton: true,
            i:0,
            usersArray:[{}],

        }
        this.state.usersArray[0] = {userID:"1",username:"test",userEmail:"test"};
        this.state.usersArray[2] = {userID:"2",username:"test",userEmail:"test"};
        this.state.usersArray[3] = {userID:"3",username:"test",userEmail:"test"};
        this.state.usersArray[4] = {userID:"4",username:"test",userEmail:"test"};
        
    }

    private deleteAllUsers(){
        return this.myAPIService.deleteAllUsers();
    }

    private getAllUsers(){
        return this.myAPIService.getAllUsers().then((response) => {
            this.setState({usersArray : response.data});
            console.log(this.state.usersArray);
        });
        
    }

    private deleteUser(e:number){
        return this.myAPIService.deleteUser(e);
    }

    render() {
        
        return (
            
            <div style={{margin: "5%" }}>
                <table className="table table-striped table-dark" >
                    <thead >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody >
                    
                    {this.state.usersArray.map(( user, index ) => {
                        let i = index + 1;
          return (
              
            <tr key={index}>
                <td>{i}</td>
                <td>{user.userID}</td>
                <td>{user.username}</td>
                <td>{user.userEmail}</td>
                <td className="form-row justify-content-around"><Link to={{pathname:`/ToDoList?userID=${user.userID}`}}>toDoList</Link><Link className="btn btn-primary btn-sm" to={{pathname:`UpdateUser?userID=${user.userID}`}}>Edit User</Link><button className="btn btn-primary btn-sm" onClick={e=>this.deleteUser(user.userID)}>Delete User</button></td>
            </tr>
          );
        })}
                    </tbody>
                </table>
                <div className="form-row justify-content-between" style={{margin: "2rem"}}>
                    <button className="btn btn-primary" onClick={e=>this.getAllUsers()}>Get All Users</button>
                    <button className="btn btn-primary" onClick={e=>this.deleteAllUsers()} >Delete All Users</button>
                </div>



            </div>
            
        );
        
    }    
}


export default AdminPanel;
