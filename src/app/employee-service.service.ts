import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Employee } from './Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }
public getEmployees(): Observable<Employee[]>
{
const url = 'http://localhost:3000/employees';
return this.http.get<Employee[ ]>(url);
}
}
