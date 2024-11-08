import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart, removeToCart } from "../Services/Actions/Actions";

const mapStateToProps = (state) => ({
  data: state.cardItems,
  //   cardData: store.data,
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removedToCartHandler: (data) => dispatch(removeToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
