import IntroductionComponent2 from './introduction_components/IntroductionComponent-2'
import IntroductionComponent3 from './introduction_components/IntroductionComponent-3';
import './App.css'

const IntroductionComponent=()=> {
  return (
    <div>
      <h1>IntroductionComponent</h1>
      <IntroductionComponent2/>          
      <IntroductionComponent3/>          
    </div>
  );
}

export default IntroductionComponent;
