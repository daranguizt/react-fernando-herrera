import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/useEffect.css';
import { Small } from './Small';

export const Memorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    //cuando se actualiza algún estado, se renderiza todo
    //otra vez, lo que podría hacer llamadas innecesarias
    return (
        <div>
            <h1>Memorize</h1>
            <hr />

            <h2>Counter: <Small value={counter} /> </h2>
            <button onClick={increment} className="btn btn-primary mt-3">
                +1
            </button>

            <button className="btn btn-primary ml-3" onClick={() => {
                setShow(!show);
            }}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
