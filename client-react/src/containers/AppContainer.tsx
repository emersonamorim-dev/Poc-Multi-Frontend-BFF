import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';
import '../styles/tabs.scss';

const AppContainer: React.FC = () => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

    useEffect(() => {
        const handleRouteChange = () => {
            const path = window.location.pathname;
            if (path === '/login') {
                setActiveTab('login');
            } else if (path === '/register') {
                setActiveTab('register');
            }
        };

        window.onpopstate = handleRouteChange;
        handleRouteChange();

        return () => {
            window.onpopstate = null;
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
        window.location.href = '/';
    };

    const showTab = (tabName: 'login' | 'register') => {
        setActiveTab(tabName);
        window.history.pushState({}, '', `/${tabName}`);
    };

    return (
        <div>
            <Header />
            {token ? (
                <>
                    <Dashboard />
                    <button onClick={handleLogout}>Sair</button>
                </>
            ) : (
                <>
                    <div className="tabs">
                        <button onClick={() => showTab('login')}>Entrar</button>
                        <button onClick={() => showTab('register')}>Cadastrar</button>
                    </div>
                    <div id="content">
                        {activeTab === 'login' ? <Login /> : <Register />}
                    </div>
                </>
            )}
            <Footer />
        </div>
    );
};

export default AppContainer;
