import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SuggestionsComponent } from './search/components/suggestions/suggestions.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchComponent,
    SuggestionsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [SearchComponent]
})
export class UiModule { }
