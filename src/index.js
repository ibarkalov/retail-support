import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ShopList from './components/shop-list';

const App = () => {

    const shopInfo = [
        { id: 1, shop: "Карусель", important: true, ipAdress: "91.204.109.13", port: "5900"},
        { id: 2, shop: "Маркос-молл груминг", important: false, ipAdress: "185.136.79.99", port: "5900"}
    ];

    const IsLoggedIn = true
    const WelcomeBox = <span>Welcome back!</span>
    const LoginBox = <span>Log in please</span>

    return (
        <div>
            { IsLoggedIn ? WelcomeBox : LoginBox}
            <AppHeader />
            <SearchPanel />
            <ShopList info = {shopInfo}/>
        </div>
    )
}

ReactDOM.render(<App /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();