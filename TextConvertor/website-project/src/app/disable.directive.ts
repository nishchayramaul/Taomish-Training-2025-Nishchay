import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisable]'
})
export class DisableDirective {

  // private to keep ele accessible inside the directive , Element Ref helps to manipulate DOM directly in angular

  // Using renderer2 for safe rendering , prevents direct manipulation to dom

  constructor(private ele: ElementRef , private renderer : Renderer2) 
  { }
  disableButton() {
    const button = this.ele.nativeElement;
    this.renderer.setProperty(button,'disabled',true)
    setTimeout(()=>{
      this.renderer.setProperty(this.ele.nativeElement,'disabled',false)
    },3000)
  
  }

       @HostListener('click') onClick() {
        this.disableButton(); 
        console.log("btn")
      }
  }


