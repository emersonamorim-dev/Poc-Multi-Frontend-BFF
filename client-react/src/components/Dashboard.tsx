import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.scss';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem('token');
        setTimeout(() => {
            navigate('/'); 
            window.location.reload(); 
        }, 1000); 
    };

    return (
        <div className="dashboard-container">
            <h2>Bem-vindo ao Dashboard</h2>
            <p>Esta é a área logada. Somente usuários autenticados podem ver esta página.</p>
            <button className="logout-button" onClick={logout}>Sair</button>
        </div>
    );
};

export default Dashboard;


