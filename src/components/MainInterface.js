import classes from './MainInterface.module.css';

import CardFront from './Card/CardFront';
import CardBack from './Card/CardBack';
import Form from './Form/Form';
import Success from './Success/Success';
import Disclaimer from './Modal/Disclaimer';
import React, { Fragment } from 'react';
import { useState } from 'react';

const MainInterface = () => {
  const [cardInfo, setCardInfo] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const cardInfoHandler = (data) => {
    setCardInfo(data);
  };
  const formSubmittedHandler = (data) => {
    setFormSubmitted(data);
  };

  const showDisclaimerHandler = (data) => {
    setShowDisclaimer(data);
  };

  return (
    <Fragment>
      <main className={classes['main-col']}>
        {showDisclaimer && <Disclaimer showModal={showDisclaimerHandler} />}
        <div className={classes['col-1']}>
          <CardFront data={cardInfo} />
          <CardBack data={cardInfo} />
        </div>
        <div className={classes['col-2']}>
          {!formSubmitted && (
            <Form pullData={cardInfoHandler} formData={formSubmittedHandler} />
          )}
          {formSubmitted && <Success showComp={formSubmittedHandler} />}
        </div>
      </main>
    </Fragment>
  );
};

export default MainInterface;
