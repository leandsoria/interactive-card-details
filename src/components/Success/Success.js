import classes from './Success.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Success = ({ showComp }) => {
  const closeSuccessMsgHandler = () => {
    showComp(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.circle}>
        <FontAwesomeIcon icon={faCheck} className={classes.check} />
      </div>
      <h3 className={classes.title}>Thank You!</h3>
      <h4 className={classes.subTitle}>We've added your card details</h4>
      <button onClick={closeSuccessMsgHandler} className={classes.btn}>
        Continue
      </button>
    </div>
  );
};

export default Success;
