import Header from "../components/Header";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  data: state.cardItems,
  //   cardData: store.data,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default Home;
