import classes from './Form.module.css';
import { useState, useEffect } from 'react';

const Form = ({ pullData }) => {
  const submitForm = (e) => {
    e.preventDefault();
  };

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardNumberValidator, setCardNumberValidator] = useState(true);
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
      if (creditCard[0] === ' ') creditCard.shift();
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
    if (event.target.value.match(/^[0-9]{0,2}$/)) {
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

  const cardNameValidatorMsg = (
    <p className={classes.wrongLabel}>This field shoulnd't be empty</p>
  );
  const cardDueDateValidatorMsg = (
    <p className={classes.wrongLabel}>Can't be blank</p>
  );

  let cardNumberCss = cardNumberValidator
    ? `${classes.input}`
    : `${classes.input} + ${classes.wrong}`;

  const cardNumberValidatorMsg = (
    <p
      className={`${classes.wrongLabel} ${
        cardNumberValidator ? '' : classes.show
      }`}
    >
      Wrong format, numbers only
    </p>
  );

  useEffect(() => {
    const cardNumberVal = [cardNumber];
    const newArr = cardNumberVal
      .join('')
      .split('')
      .filter((e) => e !== ' ');
    const validation = newArr.map((e) => e.match(/^[0-9]$/));
    if (validation.includes(null)) {
      setCardNumberValidator(false);
    } else {
      setCardNumberValidator(true);
    }
  }, [cardNumber]);

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
        required
      />
      {cardNameValidatorMsg}
      <label htmlFor="card-number" className={classes.label}>
        Card Number
      </label>
      <input
        id="card-number"
        type="tel"
        placeholder="e.g. 1234 5678 9123 0000"
        className={cardNumberCss}
        value={cardNumber}
        onChange={cardNumberHandler}
        maxLength="19"
        required
      />
      {cardNumberValidatorMsg}
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
            required
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
            required
          />
          {cardDueDateValidatorMsg}
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
          {cardDueDateValidatorMsg}
        </div>
      </div>
      <button className={classes.btn}>Confirm</button>
    </form>
  );
};

export default Form;
