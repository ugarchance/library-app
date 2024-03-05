class BookModel {
  id: number;
  title: string;
  author?: string;
  description?: string;
  copies?: number;
  copiesAvaliable?: number;
  category?: string;
  img?: string;

  constructor(
    id: number,
    title: string,
    author: string,
    description: string,
    copies: number,
    copiesAvaliable: number,
    category: string,
    img: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.author = author;
    this.copies = copies;
    this.category = category;
    this.copiesAvaliable = copiesAvaliable;
    this.img = img;
  }
}

export default BookModel;
