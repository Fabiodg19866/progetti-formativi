
   import React,{useState} from 'react'
   
const StyleInline = (props) => {
    const [isValid, setIsValid] = useState(true);
    const [enteredValue, setEnteredValue] = useState('');

    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
          setIsValid(true);
        }
        setEnteredValue(event.target.value);
      };
    
      const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
          setIsValid(false);
          return;
        }
        props.onAddGoal(enteredValue);
      };
    
    return (
         
        <form onSubmit={formSubmitHandler}>
        <div>
            
           
             <h1 style={{
                 textAlign: 'center', color: 'red',
                 marginLeft: '25%', marginRight: '25%',
                 backgroundColor:'yellow'
             }}
             >Introduction Styling Inline React</h1>
             <p style={{
                 textAlign: 'center', fontSize: '18',
                 color: 'blue', backgroundColor: 'yellow',
                 borderRadius: '15', marginLeft: '25%', marginRight: '25%',
                 fontWeight:'bolder'
             }}>Description Style Inline React</p>

           <input
          style={{
            borderColor: !isValid ? 'red' : '#ccc',
                        background: isValid ? 'salmon' : 'transparent',
             marginLeft:'40%'
          }}
          type="text"
          onChange={goalInputChangeHandler}
                />
                
                <button style={{marginRight:'30%'}} type='submit'>Invia</button>
        </div>
         </form>
        
      
     )
   }
   
   export default StyleInline