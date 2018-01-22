
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
email : string = "";
password : string = "";
details:Array<object> = [{email : '',
                        password : '',            
}]
signIn(){ 
  var data = {email: this.email, password: this.password};
  this.details.push(data);
  this.email=''; this.password = '';
}
}
