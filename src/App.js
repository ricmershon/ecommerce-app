import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage'
import './App.css';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path ='/' component={ HomePage } />
                <Route path ='/shop' component={ ShopPage } />
            </Switch>
        </div>
    )
}

export default App;