import '../../StyleExpenses.css'
import StyleProps3 from './StyleProps-3'

const StyleProps2 = (props) => {
  return (
      <div >
          <StyleProps3
              title={props.item[0].title}
              description={props.item[0].description}
              type={props.item[0].type}
              release={props.item[0].release} 
          />
        
        <StyleProps3
              title={props.item[1].title}
              description={props.item[1].description}
              type={props.item[1].type}
              release={props.item[1].release} 
          />

         <StyleProps3
              title={props.item[2].title}
              description={props.item[2].description}
              type={props.item[2].type}
              release={props.item[2].release} 
          />

             <StyleProps3
              title={props.item[3].title}
              description={props.item[3].description}
              type={props.item[3].type}
              release={props.item[3].release} 
          />
      
    </div>
  )
}

export default StyleProps2
