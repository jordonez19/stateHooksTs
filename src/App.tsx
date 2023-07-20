import Button from "react-bootstrap/Button";
import Counter from "./components/Counter";
import User from "./components/User";
import TimerPadre from "./components/TimerPadre";
function App() {
  return (
    <div className="mt-5">
      <h1>REACT + TYPESCRIPT </h1>
      <hr />
      <h2>UseState</h2><br />
      <Counter /><hr />
      <User /><hr />

      <h2>UseRef</h2><br />
      <TimerPadre />
    </div>
  );
}

export default App;
