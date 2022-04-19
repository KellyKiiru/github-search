import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {


  constructor(public elem:ElementRef) {
    this.elem.nativeElement.style.textDecoration ='underline'
   }

}
