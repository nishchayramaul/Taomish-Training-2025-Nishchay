import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormtestComponent } from './components/formtest/formtest.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormtestComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // implenting concept of  interpolation
  title = 'angular-project';
  me = signal("Nishchay")
}


