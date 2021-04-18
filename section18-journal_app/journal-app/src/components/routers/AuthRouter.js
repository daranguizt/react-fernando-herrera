import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../auth/LoginScreen'
import { RegisterScreen } from '../auth/RegisterScreen'

export const AuthRouter = () => {
    return (
        <Switch>
            <Route path="/auth/login" component={LoginScreen} />
            <Route path="/auth/register" component={RegisterScreen} />
            <Redirect to="/auth/login" />
        </Switch>
    )
}
