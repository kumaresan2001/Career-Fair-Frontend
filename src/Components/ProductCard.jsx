function ProductCard({ item }) {
  return (
    // <div className="app">
    <>
      <div className="col-lg-4 mt-4">
        <div className="card card-prod" style={{ width: "18em" }}>
          <img
            className="card-img"
            src={item.image}
            alt="Product image"
            width={"80px"}
            height="200px"
          />
          <div className="p-2 text-center">
            <h2 className="p-2">{item.title}</h2>
            <h4 className="p-1">&#8377; {item.price}</h4>
            <h3 className="p-1"> {item.category}</h3>
            <div className="p-1">{item.description}</div>
            <h3 className="p-1">
              Sold: {item.sold === true ? "true" : "false"}
            </h3>
          </div>
        </div>
      </div>
    </>
    // </div>
  );
}

export default ProductCard;
