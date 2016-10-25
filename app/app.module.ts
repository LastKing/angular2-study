/**
 * Created by toonew on 2016/9/28.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule} from '@angular/http';

//Imports for loading & configuring the in-memory in web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import './rxjs-extensions';

import {AppComponent}  from './app.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroSearchComponent} from "./hero-search.component";

import {HeroService} from './hero.service';

import {AppRoutingModule}from './app.routing'
import {TestComponent} from "./test/test.coponent";
import {CollapsibleModule} from "./simpleng/collapsible/collapsible.module";
import {HighlightModule} from "./simpleng/highlight/highlight.module";
import {UnlessModule} from "./simpleng/unless/unless.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    CollapsibleModule,
    HighlightModule,
    UnlessModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    TestComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
