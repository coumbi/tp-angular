import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Import du service
import { BookService } from './services/book.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListBookComponent } from './list-book/list-book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { AuthorsComponent } from './authors/authors.component';

// On définit ici la tables des routages


const appRoutes: Routes = [
  { path: '', component: ListBookComponent },
  { path: 'books', component: ListBookComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'books/:id', component: DetailBookComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListBookComponent,
    DetailBookComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [BookService],
  bootstrap: [AppComponent]

})
export class AppModule { }
