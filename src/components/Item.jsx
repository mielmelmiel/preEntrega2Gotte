import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="producto">
      <img src={producto.imagen} />
      <div>
        <h4>{producto.title}</h4>
        <p>Precio: ${producto.price}</p>
        <p>Categoria: {producto.categoria}</p>
        <Link className="Ver-mas" to={"/item"}>
          Ver Mas
        </Link>
      </div>
    </div>
  );
};

export default Item;
