import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeDataComponent } from './components/employee-data/employee-data.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmployeeDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee_test';

}
