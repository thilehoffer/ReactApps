import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
const books = [
  {
    author: 'Abraham Verghese',
    title: "The Covenant of Water (Oprah's Book Club)",
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',

    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
        //return Book(book);
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    console.log('handle form input');
  };
  const handleButtonclick = (e) => {
    console.log(e);
    alert('handle button click');
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />

        <button type="submit">Submit</button>
        <div>
          <button onClick={handleButtonclick} type="button">
            Click me
          </button>
        </div>
      </form>
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
