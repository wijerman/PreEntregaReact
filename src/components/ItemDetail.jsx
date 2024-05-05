import ItemCount from "./ItemCount"

const itemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2"> 
                <img src={item.imagen} className="card-img-top" alt={item.nombre} />

                </div>
                <div className="col-md-4">
                    <h1 className="display-6 text-uppercase">{item.nombre}</h1>
                    <p><b>{item.precio}</b></p>
                    <p>{item.descripcion}</p>
                    <ItemCount stock={item.stock} />
                </div>

            </div>
        </div>
    )
}

export default itemDetail;