import classes from './CardBack.module.css';
import BackCard from '../../assets/bg-card-back.png';

const CardBack = ({ data }) => {
  return (
    <div className={classes['main-container']}>
      <img src={BackCard} alt="Back Card" className={classes.img} />
      <p className={classes['card-pin']}>{data.pinValue || '000'}</p>
    </div>
  );
};

export default CardBack;
