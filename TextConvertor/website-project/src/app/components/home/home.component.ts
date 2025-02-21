import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DisableDirective } from '../../disable.directive';

@Component({
  selector: 'app-home',
  imports: [RouterLink,DisableDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
