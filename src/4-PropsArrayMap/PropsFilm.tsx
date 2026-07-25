import { IFilm } from "./model/IFilm";

const PropsFilm: React.FC<IFilm> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <h3>{props.type}</h3>
      <h4>{props.release}</h4>
    </div>
  );
};

export default PropsFilm;
