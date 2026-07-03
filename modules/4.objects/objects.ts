const nation: {
  id: number;
  name: string;
  city: string;
} = {
  id: 1,
  name: "italy",
  city: "turin",
};

console.log(nation);
console.log(nation.name);

const datiAnagrafici: {
  id: number;
  name: string;
  surname: string;
  age: number;
  nation: string;
} = {
  id: 1,
  name: "fabio",
  surname: "di gloria",
  age: 40,
  nation: "Italia",
};

console.log(datiAnagrafici);
console.log(datiAnagrafici.nation);

