import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import "./Product.css";

const Product = ()=> {
    const { data } = useContext(dataContext);
  return data.map((product)=>{
    return   (
        <div className="card">
            <img src={product.img} alt="img-product-card"></img>
            <h3>{product.name}</h3>
            <h4>{product.pice}$</h4>
            <button>COMPRAR</button>
        </div>
    )
  });
};


export default Product