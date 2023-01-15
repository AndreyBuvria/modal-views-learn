import { QueryArticleParamsEnum } from './enums/query-article.enum';
import { Article } from './../../features/main-page/article/interfaces/article.interface';
import { ArticleApiService } from './../../features/main-page/article/services/article-api.service';
import { MainLayoutService } from './../../layouts/containers/main-layout/main-layout.service';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SearchComponent } from 'src/app/ui/search';
import { map, Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainPageComponent implements OnInit {
  public portalComponent$!: Observable<ViewContainerRef | null>;
  public articles$!: Observable<Article[]>;

  constructor(
    private mainLayoutService: MainLayoutService,
    private articleApi: ArticleApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.portalComponent$ = this.mainLayoutService.portalComponent$;
    this.initArticles();
  }

  private initArticles() {
    this.articles$ = this.route.queryParams
      .pipe(
        switchMap((query: Params) => {
          if (query[QueryArticleParamsEnum.Title]) {
            return this.articleApi.articles
              .pipe(
                map((articles: Article[]) => {
                  return articles.filter((article: Article) => article.title.toLowerCase().startsWith(query[QueryArticleParamsEnum.Title].toLowerCase()))
                })
              )
          }
          return this.articleApi.articles;
        })
    );
  }

  public onOpenModal(modalPlace: ViewContainerRef) {
    modalPlace.clear();
    const componentRef = modalPlace.createComponent(SearchComponent);
    componentRef.instance.viewComponentRef = componentRef;
  }

}
