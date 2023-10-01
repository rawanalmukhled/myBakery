import "./App.css";
import products from "./products";

function App() {
  const productList = products.map((product) => {
    return (
      <div className="one-item">
        <img src={product.image}></img>
        <p>{product.name}</p>
        <p>{product.price} </p>
      </div>
    );
  });

  return (
    <>
      <div className="Main">
        <h1>RFM Bakery</h1>
        <h4>Best Bakery in Kuwait</h4>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8ordOBSmIur1wp9ACpEYmTr4wPn6vR4fPQ&usqp=CAU" />
      </div>
      <div className="design">{productList}</div>
    </>
  );
}

export default App;
