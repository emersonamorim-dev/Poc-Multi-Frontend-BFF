import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/userActions';
import { RootState, AppDispatch } from '../redux/store'; 
import '../styles/login.scss';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const dispatch = useDispatch<AppDispatch>(); 

    const token = useSelector((state: RootState) => state.user.token);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        //console.log('Dados do formulário:', { email, password });

        try {
            // Dispatch do login via Redux
            await dispatch(login(email, password)); 

            // Verifica se o token foi recuperado após a ação do Redux
            if (token) {
                localStorage.setItem('token', token); 
                setSuccess(true);
                setError('');

                setTimeout(() => {
                    window.location.href = '/Dashboard';
                }, 1000);
            } else {
                console.error('Erro: Token não encontrado.');
                setError('Erro ao autenticar, tente novamente.');
            }
        } catch (error) {
            setError('Falha no login. Tente novamente.');
            setSuccess(false);
            console.error('Erro:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Entrar</h2>
            <input
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Senha"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Entrar</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Login realizado com sucesso!</p>}
        </form>
    );
};

export default Login;
