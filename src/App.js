import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import Header from './components/Header/Header';


function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path ='/' component={ HomePage } />
                <Route path ='/shop' component={ ShopPage } />
                <Route path ='/signin' component={ SignInAndSignUpPage } />
            </Switch>
        </div>
    )
}

export default App;