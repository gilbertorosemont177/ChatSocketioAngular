import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  Socket} from 'ng-socket-io';
 

 
@Injectable()
export class ChatComponentService {
    
   constructor(public socketsrvc:Socket,private router:Router){}

   logIn(username){
       this.socketsrvc.emit("usernameconnect",username)
   }
   getlist(){
       this.socketsrvc
   }

   getEventUserConnect(){
       return this.socketsrvc.fromEventOnce("tiens")
    }
    getme(){
        return this.socketsrvc.fromEventOnce("me")
     }
geteventmoi(){
    return this.socketsrvc
}
 sendMessage(msg){
     this.socketsrvc.emit("listemessages",msg)
 }
 userTyping(usertype){
     this.socketsrvc.emit("typing",usertype)
 }
 listenOnServer(){
     return this.socketsrvc
 }

  userdeconnexion(usernames){
      //this.socketsrvc.emit("userdisconnect",username)
     this.sendMessage({
        message:usernames+ " vient de se deconnecter",
        username:usernames,
        connect:false,
        justconnect:false
      })
     
//      this.socketsrvc.emit("disconnect")
      
      localStorage.clear()
        window.location.href ="/loginchat"

  }

}