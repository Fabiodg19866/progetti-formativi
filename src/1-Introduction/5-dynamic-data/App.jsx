
import '../4-styling/App.css';
const App = () => {

    const titleIntroduction = 'React'
    const descriptionIntroduction= 'Welcome to dynamic data React'
  return (
      <div>
          <h1 className='style-h1'>{titleIntroduction}</h1>
          <p className='style-p'>{descriptionIntroduction}</p>
      
    </div>
  )
}

export default App
