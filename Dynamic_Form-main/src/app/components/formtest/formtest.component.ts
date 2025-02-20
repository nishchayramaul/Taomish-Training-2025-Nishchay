import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormGroup,FormControl,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formtest',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './formtest.component.html',
  styleUrl: './formtest.component.css',
  standalone : true,
})
export class FormtestComponent {

  a:any = "Nishchay"
 
   testform : FormGroup = new FormGroup({
   
    firstname : new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastname : new FormControl('',[Validators.required,Validators.minLength(2)]),
    age :  new FormControl('',[Validators.required, Validators.min(1)]),
     city : new FormControl ('',)

  })
  city = ['TVN', 'BNG','DLH', 'SHM'];

  //submit function 
  submit(){

  
    alert(`This is the output of form: ${JSON.stringify(this.testform.value)}`);

    // enabling state and making form dynamic  by resetting the data 

    this.testform.reset();

    //fetching first name value 

    this.testform.get("firstname")?.value
  }
}
