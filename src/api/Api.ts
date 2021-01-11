  
import axios from 'axios';
import UserInterface from '../interfaces/user.interface';

const BASE_SERVER_URL = 'http://localhost:8080/ToDoList';
const ADMIN_SERVER_URL = 'http://localhost:8080/ToDoList/admin';
const USER_SERVER_URL = 'http://localhost:8080/ToDoList/user';


export class APIService{

  isPasswordMatchTheOldPassword(user:any) {
      return axios.post<UserInterface>(BASE_SERVER_URL+`/userLogin`,user);
  }
  
  login(user:any){
    return axios.post<UserInterface>(BASE_SERVER_URL+`/userLogin`,user,{withCredentials:true  });
  }
  getUser(userID:any){
    return axios.get<UserInterface>(BASE_SERVER_URL+`/?userID=${userID}`);
  }

  deleteUser(userID:any){
    return axios.delete(ADMIN_SERVER_URL+`/deleteUser?userID=${userID}`,{withCredentials:true});
  }
  deleteAllUsers() {
    return axios.delete(ADMIN_SERVER_URL+`/deleteAllUsers`,{withCredentials:true});
  }

  getAllUsers() {
      return axios.get(ADMIN_SERVER_URL+`/getAllUsers`,{withCredentials:true});
  }

  updateUser(userID:any){
      return axios.put<UserInterface>(USER_SERVER_URL+`/updateUser`, {withCredentials:true});
  }

  createNewUser(data : UserInterface){
    return axios.post<UserInterface>(BASE_SERVER_URL+`/createNewUser`, data);
  }

  isUsernameExist(data:any){
    return axios.post(BASE_SERVER_URL+`/isUsernameExist`, data);

  }
}

