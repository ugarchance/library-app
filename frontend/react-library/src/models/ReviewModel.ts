class ReviewModel {
  id: number;
  userEmail: string;
  date: string;
  rating: number;
  book_id: number;
  reviewDescription?: string;
  constructor(
    id: number,
    userEmail: string,
    date: string,
    rating: number,
    book_id: number,
    reviewDescription: string
  ) {
    this.userEmail = userEmail;
    this.id = id;
    this.book_id = book_id;
    this.date = date;
    this.rating = rating;
    this.reviewDescription = reviewDescription;
  }
}
export default ReviewModel;
