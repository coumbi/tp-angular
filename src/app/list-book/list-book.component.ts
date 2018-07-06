import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../../model/book.interface';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: Book[] = [];
/*  books  = {
        id: 0,
        author: '',
        title: '',
        publicationDate: 0 ,
        available: '',
        nbPages: 0,
  };*/


  constructor(private bookService: BookService) { }

  ngOnInit() {
  //  console.log('List Bookss :::: '+ this.bookService)
    this.bookService
      .getBooks()
      .subscribe((res: Book[]) => this.books = res)
  }

}
