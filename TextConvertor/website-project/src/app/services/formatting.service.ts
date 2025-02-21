import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormattingService {

  
  toCamelCase(input : string): string {
    if (!input) return ''; 

    return input
      .toLowerCase() 
      .split(/\s+/) 
      .map((word, index) => 
        index === 0 
          ? word 
          : word.charAt(0).toUpperCase() + word.slice(1) 
      )
      .join(''); 
  }

  toTitleCase(text: string): string {
    return text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());
  }

  toUpperCase(input : string ): string {
      
    return input.toUpperCase();
  }

  toLowerCase(input : string ): string {
    return input.toLowerCase(); 
    
}
}
