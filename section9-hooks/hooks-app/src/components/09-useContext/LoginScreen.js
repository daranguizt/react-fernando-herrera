import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    //1. Obtain userContext
    //2. setUser
    const {setUser} = useContext(UserContext);
    const user = {
        id: 1234,
        name: 'hehe',
        email: 'hehe@hehe.net'
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <button className="btn btn-primary" 
            onClick={() => setUser(user)}>
                Login
            </button>
        </div>
    )
}
