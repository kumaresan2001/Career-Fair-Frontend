import axios from "axios";
import { useEffect, useState } from "react";
import { Config } from "./Config";

import ProductCard from "./ProductCard";

function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    Prod();
  }, []);
  let Prod = async () => {
    try {
      let prods = await axios.get(`${Config.api}/Products`);
      setProduct(prods.data);
    } catch (error) {
      alert("something went wrong");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <>
          {product.map((items, index) => {
            return <ProductCard key={index} item={items} />;
          })}
        </>
      </div>
    </div>
  );
}

export default Products;
