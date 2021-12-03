import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Welcome from '../Welcome'
import { Wrapper, Routers } from './styles'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

const Main = () => {
    return (
        <Wrapper>
            <Router>
                <>
                    <Header/>
                    <a href="#3">3 ga bor</a>
                        <Routers>
                            <Switch>
                                <Route exact path="/">
                                    <Welcome/>
                                </Route>
                                <Route path="/blog">
                                    <p>blog</p>
                                </Route>
                                <Route path="/write_review">
                                    <p>write_review</p>
                                </Route>
                                <Route path="/login">
                                    <p>login</p>
                                </Route>
                                <Route path="/signup">
                                    <p>signup</p>
                                </Route>
                                <Route path="/register_pro">
                                    <p>register_pro</p>
                                </Route>
                            </Switch>
                        </Routers>
                    <Footer id="#1"/>
                    <Footer id="#2"/>
                    <Footer id="3"/>
                    <Footer id="#4"/>
                    <Footer id="#5"/>
                    <Footer id="#6"/>
                    <Footer id="#7"/>
                    <Footer id="#8"/>
                    <Footer id="#9"/>
                </>
            </Router>
        </Wrapper>
    )
}

export default Main;