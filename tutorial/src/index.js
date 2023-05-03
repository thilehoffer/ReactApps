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
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="./images/book-1.jpg"
    alt="The Covenant of Water (Oprah's Book Club)"
  />
);
const Title = () => <h2>The Covenant of Water (Oprah's Book Club)</h2>;
const Author = () => {
  return <h4>Abraham Verghese</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
