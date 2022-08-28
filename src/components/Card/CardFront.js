import classes from './CardFront.module.css';
import FrontCard from '../../assets/bg-card-front.png';
import { useState, useContext, useEffect } from 'react';
import DataContext from '../../store/data-context';

const CardFront = (props) => {
  const ctx = useContext(DataContext);

  const [cardNumber, setCardNumber] = useState('');

  useEffect(() => {
    setCardNumber(ctx.cardNumber);
    console.log('contxt card number: ' + ctx.cardNumber);
    console.log('card number: ' + cardNumber);
  }, [ctx.cardNumber]);

  return (
    <div className={classes['main-container']}>
      <img src={FrontCard} alt="Front Card" />
      <div className={classes['card-info']}>
        <div className={classes['card-circles']}>
          <div className={classes['fullfiled-circle']} />
          <div className={classes['empty-circle']} />
        </div>
        <h3 className={classes['card-number']}>
          {cardNumber || '0000 0000 0000 0000'}
        </h3>
        <div className={classes['last-row']}>
          <p className={classes.name}>{/* {data.name || 'Name'} */}</p>
          <p className={classes['due-date']}>
            {/* {data.dueDate || 'Due Date'} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
