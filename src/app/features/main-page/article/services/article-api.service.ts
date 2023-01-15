import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArticleApiService {

  constructor() { }

  public get articles(): Observable<Article[]> {
    return of([
      {
        title: 'Food',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptate nesciunt esse beatae distinctio non perferendis laborum nulla illum quaerat vitae excepturi, eius consectetur cum libero itaque, tempore assumenda repellat.',
      },
      {
        title: 'Outfit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptate nesciunt esse beatae distinctio non perferendis laborum nulla illum quaerat vitae excepturi, eius consectetur cum libero itaque, tempore assumenda repellat.',
      },
      {
        title: 'Products',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptate nesciunt esse beatae distinctio non perferendis laborum nulla illum quaerat vitae excepturi, eius consectetur cum libero itaque, tempore assumenda repellat.',
      },
    ])
  }
}
