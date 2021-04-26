import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: MainPageComponent, data: {
      page: 'home',
    },
  },
  {
    path: 'about', component: MainPageComponent, data: {
      page: 'about',
    },
  },
  {
    path: 'contact', component: MainPageComponent, data: {
      page: 'contact',
    },
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
