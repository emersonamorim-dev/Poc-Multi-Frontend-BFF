import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/dashboard.module.scss'; 
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';



const DashboardPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/'); 
      }
    }
  }, [router]);

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      setTimeout(() => {
        router.push('/'); 
        window.location.reload(); 
      }, 1000);
    }
  };

  

  return (
    
    <>
    <main>
    <Head>
       <title>Aplicação Next.js com Typescript e Redux</title>
    </Head>
    <Header />
    <div className={styles.dashboard}>
      <h2 className={styles.title}>Bem-vindo ao Dashboard</h2>
      <p className={styles.p}>Esta é a área logada. Somente usuários autenticados podem ver esta página.</p>
      <button className={styles.logoutButton} onClick={logout}>Sair</button>
    </div>
    <Footer />
    </main>
    </>
  );
};

export default DashboardPage;
