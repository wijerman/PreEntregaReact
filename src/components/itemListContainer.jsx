import ItemCount from "./ItemCount";

const ItemListContainer = ({mensaje}) => {
    return (
        <div className="container py-5">
            <div className="row">
            
              <div className="col text-center">

                <h2 style={{color:"black", fontWeight:"bold"}}>{mensaje}</h2>
                 <ItemCount stock={7} />
              </div>

            </div>
            
        </div>
    )
}

export default ItemListContainer;