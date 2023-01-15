import { SearchModalDirective } from 'src/app/shared/directives';
import { MainLayoutService } from './main-layout.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  @ViewChild(SearchModalDirective, { static: true })
  private searchModal!: SearchModalDirective;

  constructor(private mainLayoutService: MainLayoutService) { }

  ngOnInit(): void {
    this.mainLayoutService.setPortalComponent(this.searchModal.viewContainerRef);
  }

}
