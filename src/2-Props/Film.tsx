import PropsFilm from "./PropsFilm";

const Film = () => {
  return (
    <div>
      <PropsFilm
        title="La leggenda del pianista sull'oceano"
        type="Drammatico"
        release={1990}
        product="Giuseppe Tornatore"
      />
    </div>
  );
};

export default Film;
