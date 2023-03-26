import BookShow from "./BookShow.jsx";

import {useContext} from "react";
import BookContext from "../context/books.jsx";

const BookList = ({books, onDelete, onEdit}) => {
  const {count, incrementCount} = useContext(BookContext);

  const renderedBooks = books.map(book => {
    return <BookShow key={book.id}
                     book={book}
                     onDelete={onDelete}
                     onEdit={onEdit}

    />;
  });
  return <div className="book-list">{count}
    <button onClick={incrementCount}>Click</button>
    {renderedBooks}</div>;
};

export default BookList;