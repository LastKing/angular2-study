/**
 * Created by Rain on 2016/7/5.
 */
import {NgModule}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HeroesComponent}  from './heroes.component';
import {DashboardComponent}  from './dashboard.component';
import {HeroDetailComponent} from "./hero-detail.component";
import {TestComponent} from "./test/test.coponent";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

