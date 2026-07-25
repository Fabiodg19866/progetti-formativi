import { IFilm } from "./model/IFilm";
import PropsFilm from "./PropsFilm";


type Items = IFilm[];

const ListFilm: React.FC<{ items: Items }> = (props) => {
  return (
    <div>
      <PropsFilm
        title={props.items[0].title}
        description={props.items[0].description}
        type={props.items[0].type}
        release={props.items[0].release}
      />

      <PropsFilm
        title={props.items[1].title}
        description={props.items[1].description}
        type={props.items[1].type}
        release={props.items[1].release}
      />

      <PropsFilm
        title={props.items[2].title}
        description={props.items[2].description}
        type={props.items[2].type}
        release={props.items[2].release}
      />

      <PropsFilm
        title={props.items[3].title}
        description={props.items[3].description}
        type={props.items[3].type}
        release={props.items[3].release}
      />
    </div>
  );
};

export default ListFilm;