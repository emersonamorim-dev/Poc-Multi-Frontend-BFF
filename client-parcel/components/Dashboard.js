const Dashboard = () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
        // Se o token não estiver presente, redireciona para o login
        window.location.href = '/';
        return null; 
    }

    const logout = () => {

        localStorage.removeItem('token');
        window.location.href = '/';
    };

    return `
        <div>
            <h2>Bem-vindo ao Dashboard!</h2>
            <p>Esta é a área logada. Somente usuários autenticados podem ver esta página.</p>
            <button id="logout">Sair</button>
        </div>
    `;
};

export default Dashboard;
