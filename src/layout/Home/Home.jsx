import React from 'react';
import './home.scss';
import { Header } from '../../components/Header/Header';
import { Logo } from '../../components/Logo';

export const Home = () => (
    <div className="header-container">
        <Header />
        <div className="logo-container">
            <Logo width="100px" />
        </div>
        <div className="btn-section">
            <a href="#" className="btn">Our Services</a>
            <a href="#" className="btn">Appointments</a>
        </div>
    </div>
);
