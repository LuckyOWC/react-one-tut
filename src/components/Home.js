import React, { useEffect, useState } from "react";

function Home(props) {
  console.warn("props", props);

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Home Components..</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            style={{ width: "80px" }}
            src="https://www.itel-india.com/wp-content/uploads/2024/04/12-min-min.jpg"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
        </div>
        <div className="text-wrapper item">
          <span>Price : $1000</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "Iphone 14" })
            }
          >
            Add to cart
          </button>
          <button
            className="removed-btn"
            onClick={() => props.removedToCartHandler()}
          >
            Remove to cart
          </button>
          <button onClick={() => setCounter(Math.floor(Math.random() * 10))}>
            Counter
          </button>
          <h1>Count : {counter}</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
