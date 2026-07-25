
import { IFilm } from "./model/IFilm";


const PropsFilm: React.FC<IFilm> = (props) => {
  return (
    <div>
      <div
        style={{
          marginLeft: "40%",
          marginTop: "5%",
          color: "brown",
          fontFamily: "fantasy",
          fontWidth: "condensed",
          fontSize: "22px",
        }}
      >
        <header>
          <h1>Film</h1>
        </header>
        <ul>
          <li>{props.title}</li>
          <li>{props.type}</li>
          <li>{props.release}</li>
          <li>{props.product}</li>
        </ul>
      </div>
    </div>
  );
};

export default PropsFilm;
