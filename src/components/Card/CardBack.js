import classes from './CardBack.module.css';
import BackCard from '../../assets/bg-card-back.png';

const CardBack = (props) => {
  const data = props.data;

  return (
    <div className={classes['main-container']}>
      <img src={BackCard} alt="Back Card" />
      <p className={classes['card-pin']}>{data.pin}</p>
    </div>
  );
};

export default CardBack;
