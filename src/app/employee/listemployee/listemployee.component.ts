import { Component } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { EmployeeServiceService } from 'src/app/employee-service.service';


@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styles: [
  ]
})
export class ListemployeeComponent {
  employees = new Array<Employee>();
constructor( empService:EmployeeServiceService ) {
empService.getEmployees().subscribe(response => this.employees = response )
}

}
