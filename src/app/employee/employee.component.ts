import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  textToShow: any;
  ngOnInit() {
    
  }

onClickMe(){
  this.service.getEmployee().subscribe((d: any) => {
    this.textToShow = d.json();
  });
}
}
