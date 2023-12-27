import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
            <Routes>
                <Route path='/map' element={<Header fixed='' />} />
                <Route path='/details/*' element={<Header fixed='' />} />
                <Route path='/news' element={<Header fixed='top' />} />
                <Route path='/about' element={<Header fixed='top' />} />
                <Route path='/' element={<Header fixed='top' />} />
                <Route path='/home' element={<Header fixed='top' />} />
                <Route path='/list' element={<Header fixed='top' />} />
            </Routes>
            <main id="main-content" role="main" className="container">
                <Routes>
                    <Route path='/map' element={<MapPage />} />
                    <Route path='/details/:bollard_id' element={<DetailsPage />} />
                    <Route path='/news' element={<NewsPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/' element={<HomePage />} />
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/list' element={<HomePage />} />
                </Routes>
            </main>
            <CustomCookieConsent></CustomCookieConsent>
            
        </div>
    );
}

export default App;
