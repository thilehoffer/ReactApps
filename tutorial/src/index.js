import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
};

const Book = () => {
  const title = "The Covenant of Water (Oprah's Book Club)";
  const author = 'Abraham Verghese';
  return (
    <article className="book">
      <img src="./images/book-1.jpg" alt="{title}" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
