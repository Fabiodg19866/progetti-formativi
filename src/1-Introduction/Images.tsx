
import iphone from "../assets/iphone-17-lavender-256gb-back.jpg";
import samsung from "../assets/s26.jpg";


const Images = () => {
  return (
    <div>
      <div>
        <h2 style={{
          color: "red", backgroundColor: "yellow", textAlign: 'center', 
          marginLeft :100, marginRight : 100
         }}>IPHONE 17</h2>
        <img src={iphone} height={300} alt="iphone" />
        <h2 style={{  color: "red", backgroundColor: "yellow", textAlign: 'center', 
          marginLeft :100, marginRight : 100}}>SAMSUNG S26</h2>
        <img src={samsung} height={300} alt="samsung" />
      </div>
    </div>
  );
};

export default Images;
