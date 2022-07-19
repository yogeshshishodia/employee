import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Employee } from 'src/app/Employees';
import { UiService } from 'src/app/sevices/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Output() onAddEmployee : EventEmitter<Employee> = new EventEmitter;

  name : string = '';
  profession : string ='';
  project : boolean = false;
  showAddEmployee ?: boolean;
  subscription : Subscription;

  constructor(private uiService : UiService) {
    this.subscription = this.uiService.ontoggle().subscribe((value)=>(this.showAddEmployee = value));
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name){
      alert('pls add name');
      return ;
    }

    const NewEmployee = {
      name : this.name,
      profession : this.profession,
      project: this.project
    }

    this.onAddEmployee.emit(NewEmployee)

    this.name = '';
    this.profession = '';
    this.project = false;
  }

}
