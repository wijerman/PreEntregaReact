import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
  const [contador, setContador] = useState(1);
  const [itemStock, setItemStock] = useState(stock);

  const incrementar = () => {
    if (contador < itemStock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  useEffect(() => {
    setItemStock(stock);
    if (stock < contador) {
      setContador(stock);
    }
  }, [stock]);

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <div className="btn-group" role="group" aria-label="basic Example">
            <button type="button" className="btn bg-black text-white" onClick={decrementar}>
              {" "}
              -{" "}
            </button>
            <button type="button" className="btn bg-black text-white">
              {contador}
            </button>
            <button type="button" className="btn bg-black text-white" onClick={incrementar}>
              {" "}
              +{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col text-center">
          <button type="button" className="btn bg-black text-white">
            {" "}
            Agregar al carrito{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
