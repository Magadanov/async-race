import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GaragePage from './pages/GaragePage/GaragePage';
import WinnersPage from './pages/WinnersPage/WinnersPage';
import './App.scss';

export default function App() {
    return (
        <BrowserRouter>
            <div className="main-container">
                <Header />
                <div className="main-content">
                    <Routes>
                        <Route index Component={GaragePage} />
                        <Route path="/winners" Component={WinnersPage} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
