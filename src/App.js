import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import MainPage from "./client-page/Main-page";
import ContactsPage from "./client-page/Contacts-page";
import AboutUsPage from "./client-page/AboutUs-page";
import FederationPage from "./client-page/Federation-page";
import RatingPage from "./client-page/Rating-page";


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
                </Switch>

            </BrowserRouter>

        </div>
    );
}

export default App;
