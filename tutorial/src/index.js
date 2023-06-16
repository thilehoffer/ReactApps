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
  const getBook = (id) => {
    const book = books.find((book) => {
      return book.id === id;
    });
    console.log(book);
  };

  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} getBook={getBook} key={book.id} />;
        //return Book(book);
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, id, children, getBook } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log(id);
          getBook(id);
        }}
      >
        Log book from array
      </button>
      <h4>{author} </h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
