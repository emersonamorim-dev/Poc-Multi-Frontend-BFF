<template>
  <div>
    <Header />
    <div v-if="token">
      <Dashboard />
      <button @click="handleLogout">Sair</button>
    </div>
    <div v-else>
      <!-- Abas de Navegação -->
      <div class="tabs">
        <button 
          @click="showTab('Login')" 
          :class="{ active: activeTab === 'Login' }"
        >
          Entrar
        </button>
        <button 
          @click="showTab('Register')" 
          :class="{ active: activeTab === 'Register' }"
        >
          Cadastrar
        </button>
      </div>
      
      <div id="content">
        <!-- Renderização dinâmica usando `is` -->
        <component :is="activeTabComponent" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard.vue';
import '../styles/tabs.scss';

export default {
  name: 'AppContainer',
  components: {
    Header,
    Footer,
    Login,
    Register,
    Dashboard,
  },
  setup() {
    // Token do usuário para saber se está autenticado
    const token = ref(localStorage.getItem('token'));
    const activeTab = ref('Login'); 

    const handleLogout = () => {
      localStorage.removeItem('token');
      token.value = null;
    };

    const showTab = (tabName) => {
      activeTab.value = tabName; 
    };

    // Computed para resolver o componente dinâmico
    const activeTabComponent = computed(() => {
      const componentsMap = {
        Login: 'Login',
        Register: 'Register',
      };
      return componentsMap[activeTab.value] || null; 
    });

    return {
      token,
      activeTab,
      handleLogout,
      showTab,
      activeTabComponent,
    };
  },
};
</script>






