import '../css/Save.css';
function Save(props){
// const equalSign=['=']

  return(
    <div className="save">
      <button  
      value='save'
      onClick={props.click}>Sauvegarder</button>
      </div>
  )
}

export default Save;