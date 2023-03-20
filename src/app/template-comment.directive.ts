import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'templateComment'
})
export class TemplateCommentDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.remove();
  }
}
