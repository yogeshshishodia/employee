import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/Employees';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee ?: Employee;
  @Output() onToggleProject : EventEmitter<Employee> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  projectToggle(employee : Employee)
  {
    this.onToggleProject.emit(employee);
  }

}
