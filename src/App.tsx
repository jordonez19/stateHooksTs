import Button from "react-bootstrap/Button";
import Counter from "./components/useState/Counter";
import User from "./components/useState/User";
import TimerPadre from "./components/useRef/TimerPadre";
import ContadorRed from "./components/useReducer/ContadorRed";

function App() {
  return (
    <div className="mt-5">

      <h1>REACT + TYPESCRIPT </h1><hr />
      {/* --------------------------- */}
      {/*     <h2>UseState</h2><br />
      <Counter /><hr />
      <User /><hr /> */}
      {/* --------------------------- */}
      {/*  <h2>UseRef</h2><br />
      <TimerPadre /><hr /> */}
      {/* --------------------------- */}

      <h2>UseReducer</h2><br />
      <ContadorRed />

    </div>
  );
}

export default App;
