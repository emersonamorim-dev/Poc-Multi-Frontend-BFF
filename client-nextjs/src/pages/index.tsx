import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/tabs.module.scss';
import DashboardPage from './dashboard';
import LoginPage from './login';
import RegisterPage from './register';
import { RootState } from '@/store';
import Head from 'next/head';

const HomePage = () => {
    const router = useRouter();
    const token = useSelector((state: RootState) => state.user.token);
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

    useEffect(() => {
        if (token) {
            router.push('/dashboard');
        }
    }, [token, router]);

    const showTab = (tabName: 'login' | 'register') => {
        setActiveTab(tabName);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/');
    };

    const getTitle = () => {
        if (token) return 'Aplicação Next.js com Typescript e Redux - Dashboard - Minha Aplicação';
        switch (activeTab) {
            case 'login':
                return 'Entrar - Aplicação Next.js com Typescript e Redux';
            case 'register':
                return ' Registrar - Aplicação Next.js com Typescript e Redux';
            default:
                return 'Aplicação Next.js com Typescript e Redux';
        }
    };

    return (
        <div>
            <Head>
                <title>{getTitle()}</title>
            </Head>


            <Header />
            {token ? (
                <>
                    <DashboardPage />
                    <button onClick={handleLogout}>Sair</button>
                </>
            ) : (
                <>
                    <div className={styles.tabs}>
                        <button onClick={() => showTab('login')}>Entrar</button>
                        <button onClick={() => showTab('register')}>Cadastrar</button>
                    </div>
                    <div className={styles.content}>
                        {activeTab === 'login' ? <LoginPage /> : <RegisterPage />}
                    </div>
                </>
            )}
            <Footer />
        </div>
    );
};

export default HomePage;
