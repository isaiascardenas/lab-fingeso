import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './layout/not-found/not-found.component';

import { LoginComponent } from './login/login.component';

import { IdeasListComponent     } from './ideas/list/idea-list.component';
import { IdeasPublishComponent  } from './ideas/publish/idea-publish.component';
import { IdeasDetailComponent   } from './ideas/detail/idea-detail.component';

import { RetosListComponent } from './retos/list/reto-list.component';
// import { RetosPublishComponent } from './retos/publish/reto-publish.component';
// import { RetosDetailComponent } from './retos/detail/reto-detail.component';

const appRoutes: Routes = [
  { path: 'ideas',         component: IdeasListComponent },
  { path: 'ideas/publish', component: IdeasPublishComponent },
  { path: 'ideas/:id',     component: IdeasDetailComponent },

  { path: 'retos',         component: RetosListComponent },
  // { path: 'retos/publish', component: RetosPublishComponent },
  // { path: 'retos/:id',     component: RetosDetailComponent }

  { path: 'login',         component: LoginComponent },

  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**',            component: PageNotFoundComponent },
];

@NgModule({
  // declarations: [
  //   PageNotFoundComponent,
  //   IdeasListComponent,
  //   IdeasPublishComponent,
  //   IdeasDetailComponent
  // ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
