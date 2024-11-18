import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/actions/userActions';
import { useRouter } from 'next/router';
import { AppDispatch } from '@/store';
import styles from '../styles/register.module.scss';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
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
      const result = await dispatch(registerUser(name, email, password));
      if (result) {
        setError(null);
        router.push('/dashboard'); 
      } else {
        setError('Erro ao registrar. Tente novamente.');
      }
    } catch (error) {
      setError('Falha no registro. Tente novamente.');
      console.error('Erro ao registrar:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.registerForm}>
      <h2 className={styles.title}>Registrar</h2>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className={styles.inputField}
      />
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
      <button type="submit" className={styles.submitButton}>
        Registrar
      </button>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </form>
  );
};

export default RegisterPage;

