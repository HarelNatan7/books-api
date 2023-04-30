import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bookName!: string;
  books!: Book[];
  books$!: Observable<Book[]>;
  constructor(private bookService: BookService,

  ) { }

  ngOnInit(): void {
  }
  
  onSearchBook(): void {
    console.log('this.bookName:', this.bookName)
    this.books$ = this.bookService.getBooks(this.bookName)
  }
}
