
import { useState, useEffect, useRef } from 'react';

type TimerArgs = {
    milliseconds: number,
    seconds?: number
}

const Timer = ({ milliseconds }: TimerArgs) => {

    const [segundos, setSegundos] = useState(0);
    const ref = useRef<NodeJS.Timeout>()

    useEffect(() => {
        ref.current && clearInterval(ref.current);
        ref.current = setInterval(() => setSegundos(s => s + 1), milliseconds);
    }, [milliseconds]);

    return (
        <div>
            <h4>Timer: <small>{segundos}</small> </h4>
        </div>
    );
};

export default Timer;
