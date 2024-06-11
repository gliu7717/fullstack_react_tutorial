import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { CounterButton } from '../components/CouterButton';
import { CongratulationsMessage } from '../components/CongratulationMessage';
import { Greeting } from '../components/Greeting';
import { DisplayIf } from '../components/DisplayIf';

export const CounterButtonPage = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(
    Number(localStorage.getItem('numberOfClicks')) || 0
  )
  const [hideMessage, setHideMessage] = useState(false);

  useEffect(()=>{
    localStorage.setItem('numberOfClicks', numberOfClicks)
  },[numberOfClicks])



  const increment = () => setNumberOfClicks(numberOfClicks + 1);
  const {name} = useParams()
  return (
    <>
    <h1>  The Counter Button Page</h1>
    <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
        <CongratulationsMessage
            threshold={10}
            onHide={() => setHideMessage(true)} />
    </DisplayIf>


        <CounterButton numberOfClicks={numberOfClicks} onIncrement={increment}/>
        <Greeting name="Gerry" numberofMessages={2} />
    </>
  );
}