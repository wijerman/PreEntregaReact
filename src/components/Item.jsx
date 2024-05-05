import { Link } from "react-router-dom";


const Item = ({ item }) => {
  return (
    <div className="col-md-3 mb-4">
      <Link to={"/item/" + item.id} className="text-decoration-none">
      <div className="card border-0">
        <img src={item.imagen} className="card-img-top" alt={item.nombre} />
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text"><b>${item.precio}</b></p>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Item;