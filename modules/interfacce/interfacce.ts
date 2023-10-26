interface ISmartphone {
  smartphone: string;
  id: number;
}

interface INotebook {
  brand: string;
  id: number;
}

class Technology implements ISmartphone {
  smartphone: string;
  id: number;

  constructor(smartphone: string, id: number) {
    this.smartphone = smartphone;
    this.id = id;
  }
}

let smartphone = new Technology("iOS", 15);
console.log(smartphone);
