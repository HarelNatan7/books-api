import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, map } from 'rxjs';
import { Book } from './book';
import { ApiRes } from './api-res';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private subject = new ReplaySubject<Book[]>(1);
  readonly books$ = this.subject.asObservable();
  private state?: Book[];

  constructor(private http: HttpClient) { }

  getBooks(bookName: string): Observable<Book[]> {
    this.searchBooks(bookName);
    return this.subject.asObservable();
  }

  searchBooks(bookName: string): void {
    const BASE_URL: string = `https://www.googleapis.com/books/v1/volumes?q=${bookName}&fields=items(volumeInfo(title,description,imageLinks(smallThumbnail)))`
    // this.state = [];
    this.http.get<ApiRes>(BASE_URL).subscribe(
      (res: ApiRes) => {
        const books = res.items
        this.subject.next(books);
        this.state = books;
      }
    )
  }
}
