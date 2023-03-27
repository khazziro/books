import {useState, useContext} from "react";
import BookContext from "../context/books.jsx";

const BookCreate = () => {
  const [title, setTitle] = useState('');

  const {createBook} = useContext(BookContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text"
               value={title}
               onChange={event => setTitle(event.target.value)}/>
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;