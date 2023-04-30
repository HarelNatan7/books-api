import { Component, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book!: Book;
  showFullDescription = false;
  descriptionMaxLength = 150;

  get shortDescription(): string {
    return this.book.volumeInfo.description ? this.book.volumeInfo.description.slice(0, this.descriptionMaxLength) : '';
  }

  get fullDescription(): string {
    return this.book.volumeInfo.description || '';
  }

  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }
}
