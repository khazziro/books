import {useState} from "react";
import BookEdit from "./BookEdit.jsx";

const BookShow = ({book, onDelete, onEdit}) => {
  const [showEdit, setShowEdit] = useState(false);


  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit}
                        book={book}/>;
  }

  return (
    <div className="book-show">
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