import '../css/MagnificientEqualButton.css';
function MagnificientEqualButton(props){
// const equalSign=['=']

  return(
    <div className="equal">
      <button  
      value='='
      onClick={props.click}>=</button>
      </div>
  )
}

export default MagnificientEqualButton;