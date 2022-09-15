import '../css/GreatOperationButton.css';


function GreatOperationButton(props) {
  const sum = ['+','-','*','.', 'c', '/']


  return (<div className="sum">{sum.map((value, index) => <button
    key={index}
    value={value}
    onClick={props.click}>{value}</button>)}
  </div>
  )
}

export default GreatOperationButton;