import logo from "./logo.svg";
import "./App.css";
import {  Provider } from "react-redux";
import LAPTOP_STORE from "./redux/laptops/store";
import LaptopComponent from "./components/LaptopComponent";

function App() {
  return (
    <Provider store={LAPTOP_STORE}>
      <div className="App">
        <LaptopComponent></LaptopComponent>
      </div>
    </Provider>
  );
}

export default App;
