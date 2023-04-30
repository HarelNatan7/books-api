import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {

  @Input() book!: Book;
  bookImgUrl: string = 'https://m.media-amazon.com/images/I/716WjWGXjWL.jpg'
  showFullDescription = false;
  descriptionMaxLength = 150;

  ngOnInit(): void {
    this.getImgUrl()
  }

  getImgUrl(): void {
    if (this.book.volumeInfo.imageLinks?.smallThumbnail) this.bookImgUrl = this.book.volumeInfo.imageLinks.smallThumbnail
  }

  get shortDescription(): string {
    return this.book.volumeInfo.description ? this.book.volumeInfo.description.slice(0, this.descriptionMaxLength) : '';
  }

  get fullDescription(): string {
    return this.book.volumeInfo.description?.slice(0, 200) || '';
  }

  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }
}
