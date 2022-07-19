import { Injectable } from '@angular/core';
import { Employee } from '../Employees';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiUrl = "http://localhost:4201/employees";
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl)
  }

  updateEmployeeProject(employee:Employee): Observable<Employee>
  {
    const url = `${this.apiUrl}/${employee.id}`;
    return this.http.put<Employee>(url,employee,httpOptions);
  }

  addEmployee(employee: Employee): Observable<Employee>
  {
    return this.http.post<Employee>(this.apiUrl,employee,httpOptions);
  }
}
