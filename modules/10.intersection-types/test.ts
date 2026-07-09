
type PC = {
  brandPC: string;
    modelsPC: string[];
   yearPC : number
};

type Smartphone = {
      brandSmartphone: string;
    modelsSmartPhone: string[];
   yearSmartPhone : number
};


type Ecommerce = PC & Smartphone

const ecommerce: Ecommerce = {
  brandPC: "Mac",
  modelsPC: ["MacBook Pro M5", "MacBook Air M5", "MacBook Pro M1"],
  yearPC: 2026,
    brandSmartphone: "Apple Iphone",
    modelsSmartPhone: ["Iphone 17", "Iphone 16", "Iphone 15"],
       yearSmartPhone : 2026
};

  console.log(ecommerce );
  
