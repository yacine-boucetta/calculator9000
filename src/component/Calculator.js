import { useEffect, useState } from 'react';
import '../css/Calculator.css';
import Beautifulscreen from './Beautifulscreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import AmazingNumberButton from './AmazingNumberButton'
import ItsOverNineThousands from './ItSOverNineThousand'
import Save from './Save'

function Calculator() {
  const [pad, setPad] = useState('')
  const [resultat, setResultat] = useState('')
  function click(props) {

    let eventClick = props.target.value

    switch (eventClick) {

      case "=":
        setPad(pad + eventClick)
        let resultOperation = eval(pad)
        setPad(resultOperation)
        setResultat(resultOperation)
        break;
        default: setPad(pad + eventClick)
        break;

      case "c":
        setResultat('')
        setPad('0')
        break;

      case "save":
        setPad(pad + eventClick)
        let resultOpe = eval(pad)
        setPad(resultOpe)
        setResultat(resultOpe)
        let data = new FormData();
        data.append(pad ,'pad')
        data.append(resultOpe,'resultOperation')
        fetch('src/php/db.php',
          {
            method: 'POST',
            body: data,
          });
          break;
    }
  }

  return (
    <div><ItsOverNineThousands nineThousand={resultat} />
      <div className='test'>

        <Beautifulscreen pad={pad} />

        <div className='bloc1'>
          <AmazingNumberButton click={click} />
          <GreatOperationButton click={click} />
          <MagnificientEqualButton click={click} />
        </div></div>
      <Save click={click} />
    </div>
  )
}

export default Calculator;