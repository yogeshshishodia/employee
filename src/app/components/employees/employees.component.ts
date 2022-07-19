import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/sevices/employees.service';
import { Employee } from 'src/app/Employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService
      .getEmployees()
      .subscribe((employees) => (
        this.employees = employees
      ));
  }

  onToggleProject(employee: Employee)
  {
    employee.project = !employee.project;
    this.employeeService
      .updateEmployeeProject(employee)
      .subscribe()
  }

  onAddEmployee(employee: Employee)
  {
    this.employeeService
      .addEmployee(employee)
      .subscribe((employee) => (this.employees.push(employee)))
  }

}
