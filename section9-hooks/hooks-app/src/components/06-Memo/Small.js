import React, {memo} from 'react'

//memo solo se dispara si las props cambian
export const Small = memo(({value}) => {

    console.log('Again :(');
    return (
        <small>{value}</small>
    )
})
