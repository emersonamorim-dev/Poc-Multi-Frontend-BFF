import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/userActions';
import { AppDispatch, RootState } from '../redux/store';
import '../styles/register.scss';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const dispatch = useDispatch<AppDispatch>();
    const token = useSelector((state: RootState) => state.user.token);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        //console.log('Dados do formulário:', { name, email, password });

        try {
            // Dispatch do registro via Redux
            await dispatch(register(name, email, password));

            setSuccess(true);
            setError('');
            
            setTimeout(() => {
                window.location.href = '/Dashboard';
            }, 1000);

        } catch (error) {
            setError('Falha no registro. Tente novamente.');
            setSuccess(false);
            console.error('Erro:', error);
        }
    };


    useEffect(() => {
        // Verifica se o token foi salvo após o registro
        if (success && token) {
            localStorage.setItem('token', token);
            setTimeout(() => {
                window.location.reload();  
            }, 1000);
        }
    }, [success, token]);
    

    return (
        <form onSubmit={handleSubmit}>
            <h2>Cadastrar</h2>
            <input
                type="text"
                placeholder="Nome"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
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
            <button type="submit">Cadastrar</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Cadastro realizado com sucesso!.</p>}
        </form>
    );
};

export default Register;
