import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModalDirective } from './directives';

@NgModule({
  declarations: [
    SearchModalDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchModalDirective
  ]
})
export class SharedModule { }
