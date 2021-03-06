import React from "react";
import { Router, Route } from "react-router-dom";
import "./App.css";
import SideNav from "./SideNav";
import Page from "../pages/Page";
import TabsPageSingle from "../pages/TabsPageSingle";
import TabsPageDouble from "../pages/TabsPageDouble";
import history from "../history";

function App() {
    return (
        <div className="app">
            <div className="app__container">
                <Router history={history}>
                    <SideNav history={history} />
                    <Route path="/" exact component={Page} />
                    <Route path="/page1" exact component={Page} />
                    <Route path="/page1/:id" exact component={Page} />
                    <Route path="/page2" exact component={Page} />
                    <Route path="/page2/:id" exact component={Page} />
                    <Route path="/page3" exact component={Page} />
                    <Route path="/page3/intro1" component={TabsPageSingle} />
                    <Route path="/page3/intro2" exact component={Page} />
                    <Route path="/page3/intro3" exact component={Page} />
                    <Route
                        path="/page3/intro4"
                        exact
                        component={TabsPageDouble}
                    />
                    <Route
                        path="/page3/intro4/:id"
                        component={TabsPageDouble}
                    />
                    <Route path="/page4" exact component={Page} />
                    <Route path="/page4/:id" exact component={Page} />
                </Router>
            </div>
        </div>
    );
}

export default App;
