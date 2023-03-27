import {useState, useContext} from "react";
import BookContext from "../context/books.jsx";

const BookEdit = ({book, onSubmit}) => {
  const [title, setTitle] = useState(book.title);
  const {editBookById} = useContext(BookContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <form className="book-edit"
          onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        className="input"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;