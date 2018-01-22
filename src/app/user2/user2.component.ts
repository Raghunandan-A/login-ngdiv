import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  exists = true;
  toggleExists() {
    this.exists = !this.exists;
}
TR = {
  name : "Raghu",
  place : "Kurnool"
}

Employees = [{empname:'raghu', deptname:'Development'},
{empname:'Devi', deptname:'Testing'},
{empname:'Mounika', deptname:'Devevelopment'},
{empname:'Kumar', deptname:'Development'},
]

}



