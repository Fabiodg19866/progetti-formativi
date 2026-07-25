import { IFilm } from "./model/IFilm";
import PropsFilm from "./PropsFilm";

type Items = IFilm[];

const ListFilm: React.FC<{ items: Items }> = (props) => {
  return (
    <div>
      {props.items.map((film) => (
        <PropsFilm
          key={film.id}
          title={film.title}
          description={film.description}
          type={film.type}
          release={film.release}
        />
      ))}
    </div>
  );
};

export default ListFilm;
