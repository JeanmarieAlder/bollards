import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';

function App() {
    return (
        <div className='main-div'>
            <Header></Header>
            <main role="main" className="container">
                <Switch>
                    <Route path='/map' component={MapPage} />
                    <Route path='/details/:bollard_id' component={DetailsPage} />
                    <Route path={['/home', '/list', '/']} component={HomePage} />
                </Switch>
            </main>
            
        </div>
    );
}

export default App;
