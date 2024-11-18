import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Login from '../components/Login.js';
import Register from '../components/Register.js';
import Dashboard from '../components/Dashboard.js';

const AppContainer = () => {
    const root = document.getElementById('app');

    const header = Header();
    const footer = Footer();
    const content = document.createElement('div');
    content.id = 'content';

    // Verifica se o usuário está autenticado
    const token = localStorage.getItem('token');

    if (token) {
        root.appendChild(header);
        content.innerHTML = Dashboard();
        root.appendChild(content);
        root.appendChild(footer);

        const logoutButton = document.getElementById('logout');
        if (logoutButton) {
            logoutButton.addEventListener('click', () => {
                localStorage.removeItem('token');
                window.location.href = '/';  
            });
        }
    } else {
        const tabs = document.createElement('div');
        tabs.classList.add('tabs');
        tabs.innerHTML = `
            <button id="login-tab">Entrar</button>
            <button id="register-tab">Cadastrar</button>
        `;

        root.appendChild(header);
        root.appendChild(tabs);
        root.appendChild(content);
        root.appendChild(footer);

        const showTab = (tabName) => {
            content.innerHTML = '';  
            if (tabName === 'login') {
                content.appendChild(Login());
            } else if (tabName === 'register') {
                content.appendChild(Register());
            }
        };

        showTab('login');

        // Adiciona os eventos de clique para as tabs
        document.getElementById('login-tab').addEventListener('click', () => {
            window.history.pushState({}, '', '/login');
            showTab('login');
        });

        document.getElementById('register-tab').addEventListener('click', () => {
            window.history.pushState({}, '', '/register');
            showTab('register');
        });

        const handleRouteChange = () => {
            const path = window.location.pathname;
            if (path === '/login') {
                showTab('login');
            } else if (path === '/register') {
                showTab('register');
            }
        };

        window.onpopstate = handleRouteChange;

        handleRouteChange();
    }
};

export default AppContainer;
