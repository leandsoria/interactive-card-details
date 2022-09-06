import classes from './Disclaimer.module.css';

const Disclaimer = ({ showModal }) => {
  const showModalHandler = () => {
    showModal(false);
  };

  return (
    <div className={classes.container} onClick={showModalHandler}>
      <div className={classes.backdrop}></div>
      <div className={classes.card}>
        <h2 className={classes.title}>Disclaimer!!</h2>
        <p className={classes.paragraph}>
          This is a test app, please{' '}
          <span className={classes.span}>DO NOT</span> use real credit cards on
          this element.
        </p>
        <p className={classes.paragraph}>You're advised.</p>
      </div>
    </div>
  );
};

export default Disclaimer;
