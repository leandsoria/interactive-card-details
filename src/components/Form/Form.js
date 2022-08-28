import classes from './Form.module.css';
import { useState, useContext, useEffect } from 'react';
import DataContext from '../../store/data-context';

const Form = (props) => {
  const submitForm = (e) => {
    e.preventDefault();
  };

  const ctx = useContext(DataContext);

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [monthValue, setMonthValue] = useState('');
  const [yearValue, setYearValue] = useState('');
  const [pinValue, setPinValue] = useState('');

  const cardNameHander = (event) => {
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
    setMonthValue(event.target.value);
  };

  const yearHandler = (event) => {
    setYearValue(event.target.value);
  };

  const pinHandler = (event) => {
    setPinValue(event.target.value);
  };

  useEffect(() => {
    ctx.updateNameHandler(cardName);
    ctx.cardNumber = cardNumber;
    ctx.pin = pinValue;
    ctx.dueDate = `${monthValue}/${yearValue}`;
    console.log(ctx);
    console.log(ctx.cardNumber);
  }, [cardName, cardNumber, monthValue, yearValue, pinValue, ctx]);

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
        onChange={cardNameHander}
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
          />
          <input
            type="tel"
            id="year"
            placeholder="YY"
            className={classes.input}
            value={yearValue}
            onChange={yearHandler}
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
          />
        </div>
      </div>
      <button className={classes.btn}>Confirm</button>
    </form>
  );
};

export default Form;
