import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../sevices/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showAddEmployee: boolean =false;
  subscription ?: Subscription;


  constructor(private uiService: UiService, private router:Router) { 
    this.subscription = this.uiService.ontoggle().subscribe((value)=>(this.showAddEmployee = value));
  }

  ngOnInit(): void {
  }

  toggleEmployee(){
    console.log("toggle");
    this.uiService.toogleAddEmployee();
  }

  hasRoute(route: string)
  {
    return this.router.url === route;
  }

}
