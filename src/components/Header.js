import React from "react";

function Header(props) {
  console.warn("props", props);
  console.warn("Header props", props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="counter">{props.data.length}</span>
        <img
          src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png"
          alt=""
        />
      </div>
    </div>
  );
}
export default Header;
