import { Component, OnInit,ElementRef, ViewChild, } from '@angular/core';
import { ChatComponentService } from "./chat.service";


export interface userslist{
  idsocket:string,
  user:string
}
export interface msguser{
  username:string,
  message:string,
  connect?:boolean,
  justconnect?:boolean
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  listitems=[]
  listeUsers=[]
  msg:string
  personneconnect:string
  usertype:string
  scroll:any;
  @ViewChild('scrollChat') private myScrollContainer: ElementRef;

  constructor(private socketsrvc:ChatComponentService) {

   // this.scrollToBottom();
    
  }

  ngOnInit(){
   
     
   
    this.personneconnect=localStorage.getItem("user")
    this.socketsrvc.logIn(localStorage.getItem("user"))
   

    this.socketsrvc.socketsrvc.on("getlisteuser",(data:any[])=>{

      for (let index = 0; index < data.length; index++) {
        if(this.personneconnect!= data[index].username ){
        this.listeUsers.push(data[index])
        }
        else{
          this.listeUsers.splice(index, 1);
        }
        
      }
      
    })
   this.socketsrvc.socketsrvc.emit("getuserconnecteds",(null));
   
    this.socketsrvc.socketsrvc.on("sendmeliste",(data:any[])=>{
      for (let index = 0; index < data.length; index++) {
        if(this.personneconnect!= data[index].username ){
         
          let gtsdsd=this.listeUsers.indexOf(data[index]);
          
          this.listeUsers.push(data[index])

      }
      else{
        this.listeUsers.splice(index, 1);
      }
      
        
      }
     
    })
  

    this.socketsrvc.listenOnServer().on("usrconnexion",(data)=>{
      
      this.listitems.push(data)
      

    })



  this.socketsrvc.listenOnServer().on("listemessages",((datamsg)=>{
    this.usertype=""
    console.log("data msg ->"+datamsg)
    
    this.listitems.push(datamsg)
    
    this.listitems.map((datani)=>{
      console.log(datani)
    })
    console.log("liste items ->"+this.listitems)
  }))

    this.socketsrvc.listenOnServer().on("listemessages",((listebeforecnx)=>{
      
             this.listitems=listebeforecnx
             
        
    }))
  // this.socketsrvc.listenOnServer().on("someonetyping",(data)=>{
  //   this.usertype=data
  // })

  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
} 


  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) {

      console.log( "error  "+err)

     }                 
}

  sendMessage(){
   
    let messageusr:msguser={
      message:this.msg,
      username:this.personneconnect,
      connect:true
    }
    this.socketsrvc.sendMessage(messageusr)
    this.msg=""

  }
  
  cleardata(){
    localStorage.clear()
  }
  
  UserTyping(event){
       this.socketsrvc.userTyping(this.personneconnect)
  }
  
  deconnexion(){
    this.socketsrvc.userdeconnexion(this.personneconnect)
  }

}
