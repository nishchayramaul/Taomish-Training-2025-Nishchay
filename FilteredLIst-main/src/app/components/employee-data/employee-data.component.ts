import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-data',
  standalone: true,  // If you're using standalone components
  imports: [],
  templateUrl: './employee-data.component.html',
  styleUrl: './employee-data.component.css'
})
export class EmployeeDataComponent {
  employee_details = [
    {
      name: 'Nishchay',
      employee_id: 1,
      age: 23
    },
    {
      name: 'Daksh',
      employee_id: 2,
      age: 23
    },
    {
      name: 'Iti',
      employee_id: 3,
      age: 24
    },
    {
      name: 'Teja',
      employee_id: 4,
      age: 17
    },
    {
      name: 'Shrey',
      employee_id: 3,
      age: 17
    },
    {
      name: 'Jatin',
      employee_id: 4,
      age: 12
    }
  ];
 // Array for storing filtered employees 
 filteredemp: any[] = [];

// making boolean to track whether employees are filtered or not 
 isfiltered : boolean = false ;
 submit(){
   console.log("work")
   this.isfiltered = true;
   //adding filtered employees in filtered array 
   this.filteredemp=  this.employee_details?.filter(employee => employee.age < 18)
   ;
  }
}
