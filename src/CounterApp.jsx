
import { useState } from "react";
import PropTypes from "prop-types";



export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    const increment = (e)  => {        // console.log(e);

        setCounter(  counter + 1 );
    };

    const decrement = (e)  => {        // console.log(e);

        setCounter(  counter - 1 );
    };

    const reset = (e) => {
        setCounter(  value );
    };
    


    return <>
        <h1>CounterApp</h1>
        <h2  data-testid="counter">{ counter }</h2>
        
        <button onClick={ increment }>
            +1
        </button>
        <button onClick={ decrement }>
            -1
        </button>
        <button aria-label="btn-reset" onClick={ reset }>
            Reset
        </button>
    </>
    };

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};