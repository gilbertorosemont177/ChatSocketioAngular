import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { AppRoutingModule } from "./routes.app";
import { LoginchatComponent } from './loginchat/loginchat.component';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
//{'forceNew': true}
const config: SocketIoConfig = { url: 'http://localhost:3000' };
import {  ChatComponentService} from "./chat/chat.service";
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginchatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [ChatComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
