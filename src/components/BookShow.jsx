import {useState, useContext} from "react";
import BookEdit from "./BookEdit.jsx";

import BookContext from "../context/books.jsx";

const BookShow = ({book}) => {
  const [showEdit, setShowEdit] = useState(false);
  const {deleteBookById} = useContext(BookContext)


  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit}
                        book={book}/>;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`}
           alt="books"/>
      <div>{content}</div>
      <div className="actions">
        <div className="edit"
             onClick={handleEditClick}>Edit
        </div>
        <button className="delete"
                onClick={handleDeleteClick}>Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;