import React, { Component } from 'react';
import { APIService } from '../api/Api';
import { Visibility, Error} from '@material-ui/icons';
import { Link } from 'react-router-dom';

interface IState {
    userID?:number;
    username:string;
    userEmail:string;
    password:string;
    confirmPassword:string;
    isUsernamedoesntExist:boolean;
    isAlertVisible:boolean;
    isPassVisible:string;
    isFormHidden:boolean;
    isUserCreated:boolean;
    isUserCreatedError:boolean;
    isUsernamedoesntExistButton:boolean;
}

export class CreateUser extends Component <{}, IState> { 

    isUsernamedoesntExist: boolean = true;
    myAPIService = new APIService();

    constructor(props: {}, myAPIService:APIService){
        super(props );
        this.state = {
            username:"",
            password:"",
            confirmPassword:"",
            userEmail:"",
            isUsernamedoesntExist: true,
            isAlertVisible: true,
            isPassVisible: "password",
            isFormHidden: false,
            isUserCreated: true,
            isUserCreatedError: true,
            isUsernamedoesntExistButton: true,

        }
    }

    private formHandler(){
        this.setState({
            isFormHidden: true,
        })

    }
    private handleChangePasswordConfirm(e:any){
        console.log(e);
        console.log(this.state.isAlertVisible)
        if(e === this.state.password){
            this.setState({isAlertVisible : true});
        }else{
            this.setState({isAlertVisible : false});
        }
    }

    private handleChangeUsername(e:any){
        
        console.log(e)
        var user = ({username : e});
        return this.myAPIService.isUsernameExist(user).then((response) => {
            if(response.data === false){
                this.setState({isUsernamedoesntExist : true});
                this.setState({isUsernamedoesntExistButton : false});
            }else{
                this.setState({isUsernamedoesntExist : false});
                this.setState({isUsernamedoesntExistButton : true});            
            }
        });
    }

    private handleSubmit(e:any){
        
        e.preventDefault();
        this.setState({
            username: this.state.username,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            userEmail: this.state.userEmail
        })
        return this.myAPIService.createNewUser(this.state).then((response) => {
                if(response.data.userID !== undefined){
                    this.setState({isUserCreated:false})
                }else{
                    this.setState({isUserCreatedError:false})
                }
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
           
            <div className="form-group" style={{lineHeight: "0.5"}} >
                <h1>Create User</h1>
                <hr/>
                <br/>
                <form style={{ margin: "5%", marginTop: "0.5rem" ,textAlign : "left", lineHeight: "0.5"}} onSubmit={e => this.handleSubmit(e)} hidden={this.state.isFormHidden}>
                    <label >Username</label>
                    <div className="input-group mb-3">
                        <input className="form-control" type="text" placeholder='Enter Username...'  onChange={e => {this.handleChangeUsername(e.target.value);this.setState({username: e.target.value})}}  required/>
                    </div>
                    <div style={{color: "red", textAlign: "left", width:"", lineHeight: "0", fontSize: "14px"}}  hidden={this.state.isUsernamedoesntExist}>
                        <Error/>username already Exist
                    </div>
                    <br/>
                    <br/>
                    <label >Email</label>
                    <div className="input-group mb-3">
                        <input className="form-control" type="text" placeholder='Enter your email...' onChange={e => this.setState({userEmail : e.target.value})} required/>
                    </div>
                    <br/>
                    <br/>
                    <div className="form-row">
                        <div className="col">
                        <label >Passowrd</label>
                            <div className="input-group mb-3">
                                <input className="form-control" type={this.state.isPassVisible} placeholder='Enter Password...' onChange={e => this.setState({password : e.target.value})} required />
                                    <div className="input-group-append">
                                        <span className="input-group-text" onPointerEnter={e=>this.seePass()} onPointerLeave={e=>this.seePass()}>
                                            <Visibility/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <div className="col">
                            <label >Confirm Passowrd</label>
                                <div className="input-group mb-3" >
                                    <input className="form-control" type={this.state.isPassVisible} placeholder='Confirm Password...' onChange={e => {this.handleChangePasswordConfirm(e.target.value) ; this.setState({confirmPassword : e.target.value })}} required />
                                </div>
                                    <div style={{color: "red", textAlign: "left", width:"", lineHeight: "0", fontSize: "14px"}} hidden={this.state.isAlertVisible}><Error></Error>password not match</div>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <div className="form-row justify-content-between">
                            <Link to={"/Login"} className="nav-link">Sign In Instead</Link><button className="btn btn-primary" type="submit" disabled={this.state.isUsernamedoesntExistButton} onClick={e=>this.formHandler()}>Create User</button>
                    
                    </div>
                </form >
                <div style={{color: "red", fontSize: "15%"}} hidden={this.state.isUserCreatedError}>User Not Created</div>
                <div  hidden={this.state.isUserCreated}>
                    <span style={{color: "green" , fontSize: "42px"}}> User Created Successfully</span>
                <br/>
                <br/>
                <div className="justify-content-center" >
                <Link className="nav-link" to="/">Return To Home Page</Link>
                <br/>
                <Link className="nav-link" to="/">Login</Link>
                </div>
                </div>
            </div>
          
        )
    }
}


export default CreateUser;
