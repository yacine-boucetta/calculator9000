import '../css/MagnificientEqualButton.css';
function Save(props){
// const equalSign=['=']

  return(
    <div className="save">
      <button  
      value='save'
      onClick={props.click}>=</button>
      </div>
  )
}

export default Save;