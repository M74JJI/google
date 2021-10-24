import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
function App() {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <div
            className={
                darkTheme ? 'dark' : 'flex flex-col   items-center h-screen'
            }
        >
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path={['/search', '/images', '/news', '/videos']}>
                    <Results />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
