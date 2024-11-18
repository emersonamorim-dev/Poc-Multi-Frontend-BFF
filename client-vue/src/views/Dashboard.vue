<template>
    <div class="dashboard-container">
      <h2>Bem-vindo ao Dashboard</h2>
      <p>Esta é a área logada. Somente usuários autenticados podem ver esta página.</p>
      <button class="logout-button" @click="logout">Sair</button>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import '../styles/dashboard.scss';
  
  export default {
    name: 'Dashboard',
    setup() {
      const router = useRouter();
  
      onMounted(() => {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login');
        }
      });
  
      const logout = () => {
        localStorage.removeItem('token');
        setTimeout(() => {
          router.push('/');
          window.location.reload();
        }, 1000);
      };
  
      return {
        logout
      };
    }
  };
  </script>
  
