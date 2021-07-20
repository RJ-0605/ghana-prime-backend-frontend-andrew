import {useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import {Provider} from "react-redux";

import store from "./store/";

import Home from "./pages/Home/Home"
import Login from "./pages/Auth/Login"
import Signup from "./pages/Auth/Signup"

import './assets/css/theme.min.css';
import './assets/fontawesome/css/all.css'
// import './assets/css/vender.min.css;

function App() {
    useEffect(()=> {
        // Get stuff from local storage and populate the store with them
    }, [])
  return (
    <Provider store={store}>
        <Switch>
            <Route path={"/login"} component={Login} />
            <Route path={"/signup"} component={Signup} />
            <Route exact={true} path={"/"} component={Home} />
        </Switch>
    </Provider>
  );
}

export default App;
