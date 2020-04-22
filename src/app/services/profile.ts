

export interface Roles {

   visitor?: boolean;
   admin?: boolean;
   member?: boolean;
    
    }

export class Profile {

 uid?: string;
 email?: string;
 password?: string;
 Enrollment?: number;
 First_Name?: string;
 Last_Name?: string;
 role?: Roles;

 constructor(authData){
    this.email=authData.email;
    this.role = { visitor: true };
 }

}
