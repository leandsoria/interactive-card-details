import classes from './MainInterface.module.css';

import CardFront from './Card/CardFront';
import CardBack from './Card/CardBack';
import Form from './Form/Form';

const DUMMY_DATA = {
  name: 'Jane Appleseed',
  cardNumber: 1234432112344321,
  dueDate: '10/23',
  pin: 999,
};

const MainInterface = (props) => {
  const cardInfoHandler = (data) => {
    console.log(data);
  };

  return (
    <main className={classes['main-col']}>
      <div className={classes['col-1']}>
        <CardFront data={DUMMY_DATA} />
        <CardBack data={DUMMY_DATA} />
      </div>
      <div className={classes['col-2']}>
        <Form pullData={cardInfoHandler} />
      </div>
    </main>
  );
};

export default MainInterface;
