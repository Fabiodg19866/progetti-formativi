
import styles from './StyleModule.module.css';


const StyleModule = (props) => {
  return (
      <div> 
           <h1 className={styles.introduction}>Introduction Style Modules</h1>
          <p className={styles.p}>Style Module Css</p>
          <button type={props.type} className={styles.button}>Button</button>
    </div>
  )
}
export default StyleModule