import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  bookName!: string;
  books!: Book[];
  books$!: Observable<Book[]>;

  constructor(private bookService: BookService) { }
  
  ngOnInit(): void {
    this.books$ = this.bookService.books$  
  }

  onSearchBook(): void {
    this.bookService.searchBooks(this.bookName)
  }

}
