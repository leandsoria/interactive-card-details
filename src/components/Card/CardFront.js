import classes from './CardFront.module.css';
import FrontCard from '../../assets/bg-card-front.png';

const CardFront = ({ data }) => {
  const monthValue = !data.monthValue ? '00' : data.monthValue;
  const yearValue = !data.yearValue ? '00' : data.yearValue;

  return (
    <div className={classes['main-container']}>
      <img src={FrontCard} alt="Front Card" className={classes.img} />
      <div className={classes['card-info']}>
        <div className={classes['card-circles']}>
          <div className={classes['fullfiled-circle']} />
          <div className={classes['empty-circle']} />
        </div>
        <h3 className={classes['card-number']}>
          {data.cardNumber || '0000 0000 0000 0000'}
        </h3>
        <div className={classes['last-row']}>
          <p className={classes.name}>{data.cardName || 'Name'}</p>
          <p className={classes['due-date']}>
            {`${monthValue}/${yearValue}`}
            {/* {`${data.monthValue}/${data.yearValue}` || 'Due Date'} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
