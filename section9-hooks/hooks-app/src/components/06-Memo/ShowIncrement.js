import React from 'react'

export const ShowIncrement = ({increment}) => {
    return (
        <button className="btn btn-primary" onClick={() => {
            increment(5);
        }}>
            Increment
        </button>
    )
}
