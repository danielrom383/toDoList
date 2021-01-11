import React, { Component } from 'react';
// import { APIService } from '../api/Api';
// import { Visibility, Error } from '@material-ui/icons';

// interface IState{
//     username:any;
//     newPassword:any;
//     userEmail:any;
//     isPassVisible:string;
//     isFormHidden:boolean;
//     isAlertVisible:boolean;
//     isUserUpdatedError:boolean;
//     isUserUpdated:boolean;
//     confirmNewPassword:string;
//     cookieValue:any;
//     isPasswordMatchTheOldPassword:boolean;
//     isOldPasswordFilledAndCorrect:boolean;
//     oldPassword:any;
// }

// export class UpdateUser extends Component <{},IState> {

//     myAPIService = new APIService();

    

//     constructor(props: {}, myAPIService:APIService){
//         super(props );
//         this.state = {
//             username:"",
//             newPassword:"",
//             userEmail:"",
//             isPassVisible:"password",
//             isFormHidden:false,
//             isAlertVisible:false,
//             isUserUpdated:false,
//             isUserUpdatedError:false,
//             confirmNewPassword:"",
//             cookieValue:"",
//             isPasswordMatchTheOldPassword:false,
//             isOldPasswordFilledAndCorrect:false,
//             oldPassword:null,
//         }
//         console.log(this.getUsernameFromCookie());
        
//     }

//     private formHandler(){
//         this.setState({
//             isFormHidden: true,
//         })
    
//         }

//     private handleChangePasswordConfirm(e:any){
//         console.log(e);
//         console.log(this.state.isAlertVisible)
//         if(e === this.state.newPassword){
//             this.setState({isAlertVisible : true});
//         }else{
//             this.setState({isAlertVisible : false});
//         }
//     }

//     private handleSubmit(e:any){
        
//         e.preventDefault();
//         this.setState({
//             username: this.state.username,
//             newPassword: this.state.newPassword,
//             confirmNewPassword: this.state.confirmNewPassword,
//             userEmail: this.state.userEmail
//         })
//         return this.myAPIService.createNewUser(this.state).then((response) => {
//                 if(response.data.userID !== undefined){
//                     this.setState({isUserUpdated:false})
//                 }else{
//                     this.setState({isUserUpdatedError:false})
//                 }
//         });
//     }

//     seePass(){
//         if(this.state.isPassVisible === "password"){
//             this.setState({isPassVisible:"text"})
//         }else{
//             this.setState({isPassVisible:"password"})
//         }
//     }

//     private handleChangePasswordConfirm(e:any){
//         console.log(e);
//         console.log(this.state.isAlertVisible)
//         if(e === this.state.newPassword){
//             this.setState({isAlertVisible : true});
//         }else{
//             this.setState({isAlertVisible : false});
//         }
//     }

//     getUsernameFromCookie(){
//         if(document?.cookie){
//             let getCookieValue = document.cookie.split(';').find(row => row.startsWith('access_token'))?.split('=')[1];
//             this.setState({
//                 cookieValue:getCookieValue
//             });
//         console.log(this.state.cookieValue);
//         return getCookieValue;
//         }
//     }

//     render() {
//         return (
//             <div className="form-group" style={{lineHeight: "0.5"}} >
//                 <h1 >Update User{this.state.cookieValue}</h1>
//                 <hr/>
//                 <br/>
//                 <form style={{ margin: "5%", marginTop: "0.5rem" ,textAlign : "left", lineHeight: "0.5"}} onSubmit={e => this.handleSubmit(e)} hidden={this.state.isFormHidden}>
//                     <br/>
//                     <br/>
//                     <label >Email</label>
//                     <div className="input-group mb-3">
//                         <input className="form-control" type="text" placeholder='Enter your email...' onChange={e => this.setState({userEmail : e.target.value})} required/>
//                     </div>
//                     <label >Old Password</label>
//                     <div className="input-group mb-3">
//                         <input className="form-control" type="text" placeholder='Enter Your Old Password...'  onChange={e => {this.handleChangePassword(e.target.value);this.setState({oldPassword: e.target.value})}}  />
//                     </div>
//                     <div style={{color: "red", textAlign: "left", width:"", lineHeight: "0", fontSize: "14px"}}  hidden={this.state.isPasswordMatchTheOldPassword}>
//                         <Error/>Password Don't Match The Old One
//                     </div>
//                     <br/>
//                     <br/>
//                     <div className="form-row">
//                         <div className="col">
//                         <label >New Passowrd</label>
//                             <div className="input-group mb-3">
//                                 <input className="form-control" type={this.state.isPassVisible} disabled={this.state.isOldPasswordFilledAndCorrect} placeholder='Enter Your New Password...' onChange={e => this.setState({newPassword : e.target.value})}  />
//                                     <div className="input-group-append">
//                                         <span className="input-group-text" onPointerEnter={e=>this.seePass()} onPointerLeave={e=>this.seePass()}>
//                                             <Visibility/>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <br/>
//                             <br/>
//                             <div className="col">
//                             <label >Confirm New Passowrd</label>
//                                 <div className="input-group mb-3" >
//                                     <input className="form-control" type={this.state.isPassVisible} disabled={this.state.isOldPasswordFilledAndCorrect} placeholder='Re Enter Your New Password...' onChange={e => {this.handleChangePasswordConfirm(e.target.value) ; this.setState({confirmNewPassword : e.target.value })}}  />
//                                 </div>
//                                     <div style={{color: "red", textAlign: "left", width:"", lineHeight: "0", fontSize: "14px"}} hidden={this.state.isAlertVisible}><Error></Error>password not match</div>
//                                 </div>
//                             </div>
//                             <br/>
//                             <br/>
//                             <div className="form-row justify-content-between">
//                             <button className="btn btn-primary" type="submit"  /*disabled={this.state.isUsernamedoesntExistButton}*/ onClick={e=>this.formHandler()}>Update User</button>
                    
//                     </div>
//                 </form >
//                 <div style={{color: "red", fontSize: "15%"}} hidden={this.state.isUserUpdatedError}>User Not Updated</div>
//                 <div  hidden={this.state.isUserUpdated}>
//                     <span style={{color: "green" , fontSize: "42px"}}> User Updated Successfully</span>
//                 <br/>
//                 <br/>
             
//                 </div>
//             </div>
//         );
//     }
    
// }

// export default UpdateUser;