import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CustomCookieConsent from './components/shared/cookies/CustomCookieConsent';
import Header from './Header';
import AboutPage from './pages/AboutPage';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import NewsPage from './pages/NewsPage';

function App() {
    return (
        <div className='main-div'>
            <Switch>
                <Route path={'/map'} component={() => <Header fixed='' />} />
                <Route path={'/details'} component={() => <Header fixed='' />} />
                <Route path={'/'} component={() => <Header fixed='top' />} />
            </Switch>
            <main role="main" className="container">
                <Switch>
                    <Route path='/map' component={MapPage} />
                    <Route path='/details/:bollard_id' component={DetailsPage} />
                    <Route path='/news' component={NewsPage} />
                    <Route path='/about' component={AboutPage} />
                    <Route path={['/home', '/list', '/']} component={HomePage} />
                </Switch>
            </main>
            <CustomCookieConsent></CustomCookieConsent>
            
        </div>
    );
}

export default App;
