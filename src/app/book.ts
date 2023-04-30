export interface Book {
    volumeInfo: {
        title: string;
        description: string;
        imageLinks: {
            smallThumbnail: string;
        }
    }
}

export interface ApiRes {
   items: Book[]
}
