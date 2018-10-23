import { Component,OnInit} from '@angular/core';
import * as io from 'socket.io-client';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'chatdeux';

  constructor( private router:Router) { }
  ngOnInit(){

    
  }

  
}
