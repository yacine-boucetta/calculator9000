import {  useState } from 'react';
import '../css/Calculator.css';
import Beautifulscreen from './Beautifulscreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import AmazingNumberButton from './AmazingNumberButton'
import ItsOverNineThousands from './ItSOverNineThousand'
import Save from './Save'
import Data from './Data'

function Calculator() {
  const [pad, setPad] = useState('')
  const [resultat, setResultat] = useState('')
  const[test,setTest]=useState('')

  function click(props) {

    let eventClick = props.target.value
let test1

    switch (eventClick) {

      case "=":
        setTest(pad)
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
        test1=test
        console.log(test)
        let resultOpe = eval(pad)
        setResultat(resultOpe)
        let data = new FormData();
        data.append('pad',encodeURIComponent(test1))
        data.append('resultOperation',encodeURIComponent(resultOpe))
        fetch('http://localhost:80/project/calculator9000/src/php/db.php?test=1',
          {
            mode: 'no-cors',
            method: 'POST',
            body: data,
          });
          break;
    }
  }

  return (
    <div>
      <div className='board'>
      <ItsOverNineThousands nineThousand={resultat} />
      <div className='test'>

        <Beautifulscreen pad={pad} />

        <div className='bloc1'>
          <AmazingNumberButton click={click} />
          <GreatOperationButton click={click} />
          <MagnificientEqualButton click={click} />
        </div></div>
        <Data />
      <Save click={click} />
</div>
    </div>
  )
}

export default Calculator;