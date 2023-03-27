import BookShow from "./BookShow.jsx";
import {useContext} from "react";
import BookContext from "../context/books.jsx";

const BookList = () => {
  const {book} = useContext(BookContext);

  const renderedBooks = book.map(book => {
    return <BookShow key={book.id}
                     book={book}

    />;
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;