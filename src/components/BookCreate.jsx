import {useState} from "react";

const BookCreate = ({onCreate}) => {
  const [title, setTitle] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('')
  };

  return <div>
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text"
             value={title}
             onChange={event => setTitle(event.target.value)}/>
      <button>Create!</button>
    </form>
  </div>;
};

export default BookCreate;