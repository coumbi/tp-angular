import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private urlServer: string = 'http://localhost:5000';
  constructor(private http: HttpClient) { }


  getBooks() {

          return this.http.get(this.urlServer + '/books');
  }

  getBook(id: number) {
    console.log(this.urlServer + '/books/' + id);
   return this.http.get(this.urlServer + '/books/' + id);
 }
}
