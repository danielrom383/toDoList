import React, { Component } from 'react'
import { APIService } from '../api/Api';
import UserInterface from '../interfaces/user.interface';

interface IState{
    user:UserInterface;
    toDoList:string[];
}

export class ToDoList extends Component <{},IState> {

    myAPIService = new APIService();

    constructor(props: {},myAPIService:APIService){
        super(props );
        this.state={
            user:{userID:1,username:"daniel",toDoList:[]},
            toDoList:["das","dsa","gfed"],
        };
        
    }

    componentDidMount(){
        const queryString = window.location.search;
        console.log(queryString);
        const urlParams = new URLSearchParams(queryString);
        const userID = urlParams.get('userID')
        console.log(userID);
        this.getToDoListByUser(userID);
        console.log(this.state.user)
    }
    private getToDoListByUser(userID:any){
        return this.myAPIService.getUser(userID).then((response) => {
            this.setState({toDoList : response.data.toDoList!});
            console.log(this.state.toDoList);
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.user}</h1>
                <table className="table table-striped table-dark" >
                    <thead >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">To Do</th>
                            <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody >
                    
                    {this.state.toDoList.map(( toDoList, index  ) => {
                        let i = index + 1;
          return (
              
            <tr key={index}>
                <td>{i}</td>
                <td>{}</td>
                
                {/* <td className="form-row justify-content-around"><button className="btn btn-primary btn-sm" >Edit User</button><button className="btn btn-primary btn-sm" onClick={e=>this.deleteUser(user.userID)}>Delete User</button></td> */}
            </tr>
          );
        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ToDoList;
