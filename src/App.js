/*
 * PROJECT: ecommerce-app client
 * MODULE: App.js
 * CREATED: November 2020
 * CREATED BY: Ric Mershon
 *
 * Description: App main entry point.
 */

 /*
 * EXTERNAL DEPENDENCIES
 */

 import { Switch, Route } from 'react-router-dom';

/*
 * INTERNAL DEPENDENCIES
 */

import './App.css';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';

/*
 * App functional component
 */

const App = () => (
    <div>
        <Header />
        <Switch>
            <Route exact path ='/' component={ HomePage } />
            <Route path ='/shop' component={ ShopPage } />
            <Route path ='/signin' component={ SignInAndSignUpPage } />
        </Switch>
    </div>
)

export default App;