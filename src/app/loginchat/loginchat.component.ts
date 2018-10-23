import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {ChatComponentService
}  from '../chat/chat.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-loginchat',
  templateUrl: './loginchat.component.html',
  styleUrls: ['./loginchat.component.css']
})
export class LoginchatComponent implements OnInit {

  
  constructor(private src : ChatComponentService ,private router:Router) {
    
   }

  ngOnInit() {

    if(localStorage.getItem("user")){
      this.router.navigate(['/chat'])
    }
  }
  
  usernamechat(username){
    console.log("username cnx -> "+username)
    this.router.navigate(['/chat'])
    localStorage.setItem('user',username)
    
    //this.src.socketsrvc.connect()
    
  }  
}