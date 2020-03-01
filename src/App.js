    import React from 'react';

    import './App.css';
    import Header from "./Components/Header/Header";
    import Nav from "./Components/Nav/Nav";
    import Profile from "./Components/Profile/Profile";
    import Dialogs from "./Components/DIalogs/Dialogs";
    import News from "./Components/News/News"
    import Music from "./Components/Music/Music"
    import Settings from "./Components/Settings/Settings"
    import {BrowserRouter, Route} from "react-router-dom";


    function App() {
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Nav/>
                    <div className="app-wrapper_content">
                        <Route  path='/dialogs' component={Dialogs}/>
                        <Route exact path='/profile' component={Profile}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }

    export default App;
