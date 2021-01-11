import React, { Component } from 'react';
import { Visibility } from '@material-ui/icons';
import { APIService } from '../api/Api';

interface IState {
    userID?:number;
    username:string;
    password:string;
    isUsernamedoesntExist:boolean;
    isAlertVisible:boolean;
    isPassVisible:string;
    isFormHidden:boolean;
    isUserCreated:boolean;
    isUserCreatedError:boolean;
    isUsernamedoesntExistButton:boolean;
}

export const testUser={
    username:"daniel",
    password:"1234"
}

export class LoginComponent extends Component <{}, IState> { 

    myAPIService = new APIService();
    user:any;
    constructor(props: {}, myAPIService:APIService){
        super(props );
        this.state = {
            username:"",
            password:"",
            isUsernamedoesntExist: true,
            isAlertVisible: true,
            isPassVisible: "password",
            isFormHidden: false,
            isUserCreated: true,
            isUserCreatedError: true,
            isUsernamedoesntExistButton: true,

        }
    }

    private handleSubmit(e:any){
        e.preventDefault();
        this.setState({
            username: this.state.username,
            password: this.state.password
        })
        this.user = this.state;
        return this.myAPIService.login(this.user).then((response) => {
            console.log("response "+ response.headers);
        });
    }

    seePass(){
        if(this.state.isPassVisible === "password"){
            this.setState({isPassVisible:"text"})
        }else{
            this.setState({isPassVisible:"password"})
        }
    }

    render() {
        return (
            <div >
                <h1>Login Form</h1>
                <form style={{margin: "5%" ,textAlign : "left", lineHeight: "0.5"}} onSubmit={e => this.handleSubmit(e)}>
                    <label >Username</label>
                    <div className="input-group mb-3">
                        <input className="form-control" type="text" placeholder='Enter Username...'  onChange={e => this.setState({username: e.target.value})}  required/>
                    </div>
                    <br/>
                    <br/>
                    <label >Passowrd</label>
                        <div className="input-group mb-3">
                            <input className="form-control" type={this.state.isPassVisible} placeholder='Enter Password...' onChange={e => this.setState({password : e.target.value})} required />
                                <div className="input-group-append">
                                    <span className="input-group-text" onPointerEnter={e=>this.seePass()} onPointerLeave={e=>this.seePass()}>
                                        <Visibility/>
                                    </span>
                                </div>
                            </div>           
                        <br/>
                        <br/>
                    <button className="btn btn-primary" type="submit" >Sign In</button>
                </form >
            </div>
        )
    }
}

export default LoginComponent;