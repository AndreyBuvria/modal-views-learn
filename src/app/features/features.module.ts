import { ArticleModule } from './main-page/article';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArticleModule,
  ],
  exports: [ArticleModule]
})
export class FeaturesModule { }
