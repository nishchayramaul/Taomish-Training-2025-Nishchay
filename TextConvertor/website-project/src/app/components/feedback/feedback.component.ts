import { FormsModule } from '@angular/forms';
import { FormattingService } from './../../services/formatting.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-feedback',
  imports:[FormsModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  standalone:true 
})
export class FeedbackComponent {

  input: string = '';
  format: string = '';
  selected: string = 'titlecase';

  constructor(private formatservice: FormattingService) {}


  formatText(): string {
    switch (this.selected) {
      case 'camelcase':
        return this.formatservice.toCamelCase(this.input);
      case 'uppercase':
        return this.formatservice.toUpperCase(this.input);
      case 'lowercase':
        return this.formatservice.toLowerCase(this.input);
      case 'titlecase':
        return this.formatservice.toTitleCase(this.input)
      default:
        return this.formatservice.toTitleCase(this.input);
    }
  }
  
}
