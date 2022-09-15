
import React from 'react';
import '../css/AmazingNumberButton.css';


function AmazingNumberButton(props){ 

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


return (<div className="number">{number.map((value, index) => <button
  key={index}
  value={value}
  onClick={props.click}>{value}</button>)}
</div>
)}

export default AmazingNumberButton