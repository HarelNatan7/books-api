import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRes, Book } from './book';
import { Observable, ReplaySubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private subject = new ReplaySubject<Book[]>(1);
  private state?: Book[];
  
  constructor(private http: HttpClient) { }
  
  getBooks(bookName: string): Observable<Book[]> {
    this.initBooks(bookName);
    return this.subject.asObservable();
  }
  
  initBooks(bookName: string) {
    const BASE_URL: string = `https://www.googleapis.com/books/v1/volumes?q=${bookName}&fields=items(volumeInfo(title,description,imageLinks(smallThumbnail)))`
    this.state = [];
    this.http.get<ApiRes>(BASE_URL).subscribe(
      (res: ApiRes) => {
        const books = res.items
        console.log('res:', books)
        this.subject.next(books);
        this.state = books;
      }
    )
  }
}
