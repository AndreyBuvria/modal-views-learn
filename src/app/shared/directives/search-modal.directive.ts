import { AfterViewInit, Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[searchModal]',
})
export class SearchModalDirective implements AfterViewInit {

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit(): void {
  }

}
