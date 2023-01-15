import { SearchModalDirective } from 'src/app/shared/directives';
import { Injectable, ViewContainerRef, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainLayoutService {
  public get portalComponent$() {
    return this._portalComponent$.asObservable();
  }

  private _portalComponent$ = new BehaviorSubject<ViewContainerRef | null>(null);

  constructor() { }

  public setPortalComponent(portal: ViewContainerRef) {
    this._portalComponent$.next(portal);
  }

  public clearPortalComponent() {
    this._portalComponent$.next(null);
  }
}
