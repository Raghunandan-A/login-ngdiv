import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { User2Component } from './user2/user2.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    User2Component
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path:'user',component:UserComponent},
      {path:'user2',component:User2Component}
    
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
