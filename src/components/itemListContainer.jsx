import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";

const ItemListContainer = ({}) => {
const [items, setItems] = useState ([]);

 useEffect(() => {
  const promesa = new Promise(resolve => {
    setTimeout(() => {
      resolve(arrayProductos);
    }, 2000)
  }); 

  
  promesa.then(respuesta => {
    setItems(respuesta); 
  })
 }, [])




    return (
        <div className="container ">
            <div className="row my-5">
            
              

                <ItemList items={items} />
                 
              </div>

            </div>
            
        
    )
}

export default ItemListContainer;