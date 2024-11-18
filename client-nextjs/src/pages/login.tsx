import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions/userActions';

import { useRouter } from 'next/router';
import { setUserToken, setUserError } from '../store/slices/userSlice';  
import styles from '../styles/login.module.scss';
import { AppDispatch } from '@/store';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/'); 
      }
    }
  }, [router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const result = await dispatch(loginUser(email, password));  

      if (result && result.token) {
        dispatch(setUserToken(result.token));
        setError(null);
        router.push('/dashboard');
      } else {
        dispatch(setUserError('Erro ao fazer login. Tente novamente.'));
      }
    } catch (error) {
      dispatch(setUserError('Erro inesperado ao fazer login.'));
      console.error('Erro inesperado ao fazer login:', error);
    }
  };

  return (
    <main className={styles.mainContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2 className={styles.title}>Entrar</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitButton}>Entrar</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </main>
  );
};

export default LoginPage;
