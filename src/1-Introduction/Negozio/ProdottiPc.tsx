import ProdottiSmartphone from "./ProdottiSmartphone";

const ProdottiPc = () => {
  return (
    <div>
      <div>
        <ul style={{ color: "green", marginTop: "2%" }}>
          PRODOTTI PC
          <li>MacBook Pro M5</li>
          <li>MacBookAir M5</li>
          <li>macBook Air M4</li>
        </ul>
      </div>

      <ProdottiSmartphone />
    </div>
  );
};

export default ProdottiPc;
