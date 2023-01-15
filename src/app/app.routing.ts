import { MainPageComponent } from './pages/main-page/main.component';
import { MainLayoutComponent } from './layouts/containers/main-layout';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
        { path: '', redirectTo: '/main', pathMatch: 'full' },
        {
          path: 'main',
          component: MainPageComponent
        },
        {
          path: '**',
          redirectTo: '/main',
          pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
