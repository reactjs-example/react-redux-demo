import React from "react";
import { connect } from "react-redux";
import buyLaptop from "../redux/laptops/laptopActions";

function LaptopComponent(props) {
  return (
    <div>
      <p>LaptopComponent</p>
      <h2>Laptop Count {props.laptopStockCount}</h2>
      <button onClick={props.buyLaptopEvent}>Buy Laptop </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    laptopStockCount: state.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyLaptopEvent: () => dispatch(buyLaptop()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LaptopComponent);
