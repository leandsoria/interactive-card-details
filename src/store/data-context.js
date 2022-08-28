import React from 'react';

const DataContext = React.createContext({
  name: 'Albert',
  cardNumber: '',
  pin: '',
  dueDate: '',
  updateNameHandler: (name) => {
    this.name = name;
  },
});

export default DataContext;
