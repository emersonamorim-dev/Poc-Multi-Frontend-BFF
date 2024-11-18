<template>
  <form @submit.prevent="handleSubmit">
    <h2>Entrar</h2>
    <input
      type="email"
      placeholder="Email"
      id="email"
      v-model="email"
      required
    />
    <input
      type="password"
      placeholder="Senha"
      id="password"
      v-model="password"
      required
    />
    <button type="submit">Entrar</button>
    <p v-if="error" style="color: red;">{{ error }}</p>
    <p v-if="success" style="color: green;">Login realizado com sucesso!</p>
  </form>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import '../styles/login.scss';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: '',
      success: false,
    };
  },
  methods: {
    async handleSubmit() {
      console.log('Dados do formulário:', { email: this.email, password: this.password });

      try {
        // Dispatch para login via Vuex
        await this.$store.dispatch('login', { email: this.email, password: this.password });

        // Verifica se o token foi recuperado após a ação do Vuex
        const token = this.$store.state.token;  
        if (token) {
          localStorage.setItem('token', token);
          this.success = true;
          this.error = '';

          window.location.reload(); 
        } else {
          console.error('Erro: Token não encontrado.');
          this.error = 'Erro ao autenticar, tente novamente.';
        }
      } catch (err) {
        this.error = 'Falha no login. Tente novamente.';
        this.success = false;
        console.error('Erro:', err);
      }
    },
  },
};
</script>
