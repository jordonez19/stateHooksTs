import { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const contador = (num: number): void => {
        if (num > 0) {
            setCounter(counter + num);
        } else {
            setCounter(counter + num);
        }
    };

    return (
        <div>
            <h3>Counter : useState</h3>
            <div className="d-flex">
                <Button className="m-2" onClick={() => contador(-2)}>
                    -2
                </Button>
                <Button className="m-2" onClick={() => contador(-1)}>
                    -1
                </Button>
                <h2 className="m-2">{counter}</h2>
                <Button className="m-2" onClick={() => contador(1)}>
                    +1
                </Button>
                <Button className="m-2" onClick={() => contador(2)}>
                    +2
                </Button>
                <Button className="m-2 bt btn-danger" onClick={() => setCounter(0)}>reset</Button>
            </div>
        </div>
    );
};

export default Counter;

/* 
    void no regresa nada

*/
