import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from "./chat/chat.component";
import { LoginchatComponent } from "./loginchat/loginchat.component";
const routes: Routes = [
    { path: 'chat', component: ChatComponent },
    {path:'loginchat',component:LoginchatComponent},
    {path:'',pathMatch:'full',component:LoginchatComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
