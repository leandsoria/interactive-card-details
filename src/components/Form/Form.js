import classes from './Form.module.css';
import { useState, useEffect } from 'react';

const Form = ({ pullData, formData }) => {
  const isEmpty = `This field shoulnd't be empty`;
  const isBlank = `Can't be blank`;
  const isWrong = `Wrong card Number`;

  const [cardName, setCardName] = useState('');
  const [cardNameValidator, setCardNameValidator] = useState(true);
  const [cardNumber, setCardNumber] = useState('');
  const [cardNumberNotEmpty, setCardNumberNotEmpty] = useState(false);

  const [cardNumberValMsg, setCardNumberValMsg] = useState(isEmpty);
  const [cardNumberValidator, setCardNumberValidator] = useState(true);
  const [dueDateValidator, setDueDateValidator] = useState(true);
  const [monthValue, setMonthValue] = useState('');
  const [yearValue, setYearValue] = useState('');
  const [pinValueValidator, setPinValueValidator] = useState(true);
  const [pinValue, setPinValue] = useState('');

  const [cardSubmitValidation, setCardSubmitValidation] = useState(false);

  useEffect(() => {
    const data = {
      cardName,
      cardNumber,
      monthValue,
      yearValue,
      pinValue,
    };
    pullData(data);

    if (
      cardName &&
      cardNameValidator &&
      cardNumberNotEmpty &&
      cardNumberValidator &&
      monthValue !== '' &&
      yearValue !== '' &&
      dueDateValidator &&
      pinValueValidator
    ) {
      setCardSubmitValidation(true);
    } else setCardSubmitValidation(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardName, cardNumber, monthValue, yearValue, pinValue, dueDateValidator]);

  const labelCallFn = (validator) => {
    if (!validator) {
      return `${classes.wrongLabel} ${classes.show}`;
    } else {
      return classes.wrongLabel;
    }
  };

  const createMsgFn = (msg, validator) => {
    const classType = labelCallFn(validator);
    return <p className={classType}>{msg}</p>;
  };

  let cardNameValidatorMsg = createMsgFn(isEmpty, cardNameValidator);
  let cardDueDateValidatorMsg = createMsgFn(isBlank, dueDateValidator);
  let cardPinValidatorMsg = createMsgFn(isBlank, pinValueValidator);
  let cardNumberValidatorMsg = createMsgFn(
    cardNumberValMsg,
    cardNumberValidator
  );

  let cardNameClass = cardNameValidator
    ? `${classes.input}`
    : `${classes.input} + ${classes.wrong}`;
  let cardNumberCss = cardNumberValidator
    ? `${classes.input}`
    : `${classes.input} + ${classes.wrong}`;

  let cardDueDateCss = dueDateValidator
    ? `${classes.input}`
    : `${classes.input} + ${classes.wrong}`;

  let cardPinCss = pinValueValidator
    ? `${classes.input}`
    : `${classes.input} + ${classes.wrong}`;

  const submitForm = (e) => {
    e.preventDefault();
    if (cardName.split(' ').join('') === '') {
      setCardNameValidator((e) => (e = false));
    }

    if (cardNumber.split(' ').join('') === '') {
      setCardNumberNotEmpty(false);
      setCardNumberValidator(false);
      setCardNumberValMsg(isEmpty);
    }

    if (cardNumber.length < 19) {
      setCardNumberValMsg(isWrong);
      setCardNumberValidator(false);
      setCardSubmitValidation(false);
    }

    if (monthValue.length === 0 || yearValue.length === 0) {
      setDueDateValidator(false);
    } else if (
      monthValue === '' ||
      monthValue === '0' ||
      monthValue === '00' ||
      yearValue === '' ||
      yearValue === '0' ||
      yearValue === '00'
    ) {
      setDueDateValidator(false);
    } else {
      setDueDateValidator(true);
    }
    if (pinValue.length !== 3 && pinValue.length < 3) {
      setPinValueValidator(false);
    }
    if (cardSubmitValidation) {
      formData(cardSubmitValidation);
    } else {
      formData(cardSubmitValidation);
    }
  };
  const cardNameHandler = (event) => {
    if (event.target.value.split(' ').join('') !== '') {
      setCardNameValidator((event) => (event = true));
    }
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
    if (event.target.value.length === 19) setCardNumberNotEmpty(true);
    if (event.target.value.length > 0) setCardNumberValidator(true);
    setCardNumber(finalNumber);
  };

  const monthHandler = (event) => {
    if (
      event.target.value.match(/^[0-9]{0,2}$/) ||
      event.target.value !== '' ||
      event.target.value !== '0' ||
      event.target.value !== '00'
    ) {
      setDueDateValidator((event) => (event = true));
      setMonthValue(event.target.value);
    }
  };
  const yearHandler = (event) => {
    if (
      event.target.value.match(/^[0-9]{0,2}$/) ||
      event.target.value !== '' ||
      event.target.value !== '0' ||
      event.target.value !== '00'
    ) {
      setDueDateValidator((event) => (event = true));
      setYearValue(event.target.value);
    }
  };

  const pinHandler = (event) => {
    if (event.target.value.match(/^[0-9]{0,3}$/)) {
      setPinValueValidator(true);
      setPinValue(event.target.value);
    }
    return;
  };

  useEffect(() => {
    const cardNumberVal = [cardNumber];
    const newArr = cardNumberVal
      .join('')
      .split('')
      .filter((e) => e !== ' ');
    const validation = newArr.map((e) => e.match(/^[0-9]$/));
    if (validation.includes(null)) {
      setCardNumberValidator(false);
      setCardNumberValMsg(isWrong);
    } else {
      setCardNumberValidator(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        className={cardNameClass}
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
            className={cardDueDateCss}
            value={monthValue}
            onChange={monthHandler}
            maxLength="2"
            max="12"
          />
          <input
            type="tel"
            id="year"
            placeholder="YY"
            className={cardDueDateCss}
            value={yearValue}
            onChange={yearHandler}
            maxLength="2"
            max="99"
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
            className={cardPinCss}
            value={pinValue}
            onChange={pinHandler}
            maxLength="3"
          />
          {cardPinValidatorMsg}
        </div>
      </div>
      <button className={classes.btn}>Confirm</button>
    </form>
  );
};

export default Form;
