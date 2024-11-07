import ChildIntroductionComponent from "./introduction_components/ChildIntroductionComponent";

const IntroductionComponent = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ChildIntroductionComponent />
    </div>
  );
};

export default IntroductionComponent;
