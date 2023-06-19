import React from 'react';
import ReactDOM from 'react-dom/client';
import books from './books';
import Book from './Book';
import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
        //return Book(book);
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
