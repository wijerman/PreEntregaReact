import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
 


const ItemDetailContainer = () => {
    const [item, setItem] = useState ([]);
    const [visible, setVisible] = useState(true);
    const {id} = useParams();
    
     useEffect(() => {
      const db = getFirestore();
      const docRef = doc(db, "items", id);
      getDoc(docRef).then(snapShot => {
        if (snapShot.exists()) {
          setItem({id:snapShot.id, ...snapShot.data()});
          setVisible(false);
        }
      });
     }, [id]);
      
    
        return (
            <div className="container ">
                <div className="row my-5">
                    <ItemDetail item={item} />
                     
                  </div>
    
                </div>
                
            
        )
    }
    
    export default ItemDetailContainer;