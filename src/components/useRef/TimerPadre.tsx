import Timer from "./Timer"
import { useState } from 'react'

const TimerPadre = () => {

    const [milliseconds, setMilliseconds] = useState(1000)

    return (
        <div>
            <h3>TimerPadre : UseRef </h3><br />

            <span>Milisegundos</span><br />
            <button
                onClick={() => setMilliseconds(1000)}
                className="btn btn-success me-2">
                1000
            </button>
            <button
                onClick={() => setMilliseconds(2000)}
                className="btn btn-success">
                2000
            </button>

            <Timer milliseconds={milliseconds} />
        </div>
    )
}

export default TimerPadre
