import React from 'react';
import Accordion from './Accordion';
import Search from './Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library',
  },
  {
    title: 'How do you use React?',
    content: 'With components',
  },
];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
