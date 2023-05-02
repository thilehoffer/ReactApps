import React from 'react';
import ReactDOM from 'react-dom/client';

const BookList = () => {
  return (
    <section>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/91b7tm523VL._AC_UL600_SR600,400_.jpg"
    alt="The Covenant of Water (Oprah's Book Club)"
  />
);
const Title = () => <h2>The Covenant of Water (Oprah's Book Club)</h2>;
const Author = () => {
  return <h4>Abraham Verghese</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
