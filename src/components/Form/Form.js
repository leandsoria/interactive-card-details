import classes from './Form.module.css';
import { useState, useEffect } from 'react';

const Form = ({ pullData }) => {
  const submitForm = (e) => {
    e.preventDefault();
  };

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [monthValue, setMonthValue] = useState('');
  const [yearValue, setYearValue] = useState('');
  const [pinValue, setPinValue] = useState('');

  useEffect(() => {
    const data = {
      cardName,
      cardNumber,
      monthValue,
      yearValue,
      pinValue,
    };
    pullData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardName, cardNumber, monthValue, yearValue, pinValue]);

  const cardNameHandler = (event) => {
    setCardName(event.target.value);
  };

  const cardNumberHandler = (event) => {
    const value = event.target.value;
    const rawText = [...value.split(' ').join('')];
    const creditCard = [];

    rawText.forEach((val, i) => {
      if (i % 4 === 0) creditCard.push(' ');
      creditCard.push(val);
    });
    const finalNumber = creditCard.join('');
    setCardNumber(finalNumber);
  };

  const monthHandler = (event) => {
    if (event.target.value.match(/^[0-9]{0,2}$/)) {
      setMonthValue(event.target.value);
    }
    return;
  };

  const yearHandler = (event) => {
    if (event.target.value.match(/^[0-9`]{0,2}$/)) {
      setYearValue(event.target.value);
    }
    return;
  };

  const pinHandler = (event) => {
    if (event.target.value.match(/^[0-9]{0,3}$/)) {
      setPinValue(event.target.value);
    }
    return;
  };

  return (
    <form onSubmit={submitForm} className={classes.form}>
      <label htmlFor="cardholder-name" className={classes.label}>
        Cardholder Name
      </label>
      <input
        id="cardholder-name"
        type="name"
        placeholder="e.g. Jane Appleseed"
        value={cardName}
        onChange={cardNameHandler}
        className={classes.input}
      />
      <label htmlFor="card-number" className={classes.label}>
        Card Number
      </label>
      <input
        id="card-number"
        type="tel"
        placeholder="e.g. 1234 5678 9123 0000"
        className={classes.input}
        value={cardNumber}
        onChange={cardNumberHandler}
        maxLength="20"
      />
      <div className={classes.group}>
        <div className={classes['col-1']}>
          <label htmlFor="month" id="due-date" className={classes.label}>
            Exp. Date (MM/YY)
          </label>
          <input
            type="tel"
            id="month"
            placeholder="MM"
            className={classes.input}
            value={monthValue}
            onChange={monthHandler}
            maxLength="2"
            max="12"
          />
          <input
            type="tel"
            id="year"
            placeholder="YY"
            className={classes.input}
            value={yearValue}
            onChange={yearHandler}
            maxLength="2"
            max="99"
          />
        </div>
        <div className={classes['col-2']}>
          <label htmlFor="pin" className={classes.label}>
            CVC
          </label>
          <input
            id="pin"
            type="tel"
            placeholder="e.g. 123"
            className={classes.input}
            value={pinValue}
            onChange={pinHandler}
            maxLength="3"
          />
        </div>
      </div>
      <button className={classes.btn}>Confirm</button>
    </form>
  );
};

export default Form;
