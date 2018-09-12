import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PageNotFoundComponent } from './layout/not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { IdeasListComponent } from './ideas/list/idea-list.component';
import { RetosListComponent } from './retos/list/reto-list.component';
import { IdeasPublishComponent } from './ideas/publish/idea-publish.component';
import { IdeasDetailComponent } from './ideas/detail/idea-detail.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* Temporal - simular web api */
// // import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    IdeasListComponent,
    IdeasPublishComponent,
    IdeasDetailComponent,
    RetosListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
