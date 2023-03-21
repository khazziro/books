import {useState} from "react";

const BookEdit = ({book, onSubmit}) => {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
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