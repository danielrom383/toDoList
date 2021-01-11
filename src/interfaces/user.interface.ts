
export default class UserInterface{
    
        username:      string;
        userID?:        number;
        toDoList?:      string[];
        password?:      string;
        userEmail?:     string;
        userCreatedAt?: string;
        userUpdatedAt?: string;
        userReadedAt?:  string;
    


    constructor(username:string, userEmail?:string, password?:string){
            this.password = password;
            this.userEmail = userEmail;
            this.username = username;
        }
    
    
}