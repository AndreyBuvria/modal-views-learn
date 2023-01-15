import { Article } from './../../interfaces/article.interface';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  public articles$!: Observable<Article[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
