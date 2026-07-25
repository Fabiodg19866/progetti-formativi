import PropsIfElse from "./PropsIfElse"

import { IProduct } from "./model/IProduct"

import prodottiData from '../data/prodotti.json'

const PropsProduct = () => {

    
  
    const prodotti: IProduct[] = prodottiData
        
        
        /*
        
        [
    {
        id: 1,
        nome: "Mouse",
        quantita: 10
    },
    {
        id: 2,
        nome: "Tastiera",
        quantita: 0
    },
    {
        id: 3,
        nome: "Monitor",
        quantita: 8
    },
    {
        id: 4,
        nome: "Webcam",
        quantita: 0
    }
]
  */
    

  return (
    <div>
      <PropsIfElse prodotti={prodotti}/>
    </div>
  )
}

export default PropsProduct
