import axios from "axios";
import { useEffect, useState } from "react";
import { Config } from "./Config";

import ProductCard from "./ProductCard";

function Products() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

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
      <input
        className="input"
        placeholder="Search Products"
        onChange={(e) => setSearch(e.target.value)}
      ></input>

      <div className="price">
        <h2>
          Price :
          <div className="btn">
            <button className="mybtn-low" onClick={() => setCount(1)}>
              Low to High
            </button>
          </div>
          <div className="btn ">
            <button
              className="mybtn-low"
              type="button"
              onClick={() => setCount(-1)}
            >
              High to Low
            </button>
          </div>
          <div className="btn">
            <button
              className="mybtn-low"
              type="button"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </h2>
      </div>

      <div className="row">
        <>
          {product
            .sort((a, b) => {
              if (count == 0) {
                return 0;
              } else if (count == 1) {
                return a.price - b.price;
              } else if (count == -1) {
                return b.price - a.price;
              }
            })
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search.toLowerCase()) ||
                    item.description
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    item.category
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    String(item.price).includes(search);
            })
            .map((items, index) => {
              return <ProductCard key={index} item={items} />;
            })}
        </>
      </div>
    </div>
  );
}

export default Products;
