
import '../../StyleExpenseItem.css';
const StyleProps3 = (props) => {
  return (
      <div className='expense-item' >
          <div className='expense-item__description' >
              <h1>{props.title}</h1> 
              <p>{props.description}</p>
              <p>{props.type}</p>
              <p>{props.release}</p>
          </div>
      
    </div>
  )
}

export default StyleProps3
