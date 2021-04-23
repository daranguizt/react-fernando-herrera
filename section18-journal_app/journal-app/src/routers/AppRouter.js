import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebaseConfig";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { login } from "../actions/auth";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);

        dispatch(startLoadingNotes(user.uid));
       
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return <h1>Please wait...</h1>;
  }

  return (
    <Router>
      <Switch>
        <PublicRouter path="/auth" component={AuthRouter} isLoggedIn={isLoggedIn} />
        <PrivateRouter exact path="/" component={JournalScreen} isLoggedIn={isLoggedIn}/>
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};
