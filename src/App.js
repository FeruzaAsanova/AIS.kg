import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import MainPage from "./client-page/Main-page";
import ContactsPage from "./client-page/Contacts-page";
import AboutUsPage from "./client-page/AboutUs-page";
import FederationPage from "./client-page/Federation-page";
import RatingPage from "./client-page/Rating-page";
import NewsPage from "./client-page/News-page";


function App() {
    return (
        <div className="App">
            <BrowserRouter>

                <Switch>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/about-us' exact component={AboutUsPage}/>
                    <Route path='/contacts' exact component={ContactsPage}/>
                    <Route path='/federation' exact component={FederationPage}/>
                    <Route path='/rating' exact component={RatingPage}/>
                    <Route path='/news' exact component={NewsPage}/>
                </Switch>

            </BrowserRouter>

        </div>
    );
}

export default App;
