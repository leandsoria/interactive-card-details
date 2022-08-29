import classes from './MainInterface.module.css';

import CardFront from './Card/CardFront';
import CardBack from './Card/CardBack';
import Form from './Form/Form';

import { useState } from 'react';

const MainInterface = () => {
  const [cardInfo, setCardInfo] = useState({});

  const cardInfoHandler = (data) => {
    setCardInfo(data);
  };

  return (
    <main className={classes['main-col']}>
      <div className={classes['col-1']}>
        <CardFront data={cardInfo} />
        <CardBack data={cardInfo} />
      </div>
      <div className={classes['col-2']}>
        <Form pullData={cardInfoHandler} />
      </div>
    </main>
  );
};

export default MainInterface;
