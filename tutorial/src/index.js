import React from 'react';
import ReactDOM from 'react-dom/client';

const Greeting = () => {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
};

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>this is the message</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
