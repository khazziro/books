import BookShow from "./BookShow.jsx";
import {useContext} from "react";
import BookContext from "../context/books.jsx";

const BookList = ({}) => {
  const {books} = useContext(BookContext);

  const renderedBooks = books.map(book => {
    return <BookShow key={book.id}
                     book={book}

    />;
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;