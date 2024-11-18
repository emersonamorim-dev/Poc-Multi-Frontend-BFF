<template>
    <form @submit.prevent="handleSubmit">
      <h2>Cadastrar</h2>
      <input
        type="text"
        placeholder="Nome"
        id="name"
        v-model="name"
        required
        autocomplete="name"
      />
      <input
        type="email"
        placeholder="Email"
        id="email"
        v-model="email"
        required
        autocomplete="email"
      />
      <input
        type="password"
        placeholder="Senha"
        id="password"
        v-model="password"
        required
        autocomplete="new-password"
      />
      <button type="submit">Cadastrar</button>
      <p v-if="error" style="color: red;">{{ error }}</p>
      <p v-if="success" style="color: green;">Cadastro realizado com sucesso!</p>
    </form>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  import { register } from '../store/actions';
  import '../styles/register.scss';
  
  export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: '',
      success: false,
    };
  },
  computed: {
    errorFromStore() {
      return this.$store.state.error;
    },
    successFromStore() {
      return this.$store.state.success;
    },
  },
  methods: {
    async handleSubmit() {
      console.log('Dados do formulário de registro:', { name: this.name, email: this.email, password: this.password });

      try {
        // Dispatch para registrar
        await this.$store.dispatch('register', { name: this.name, email: this.email, password: this.password });

        // Verifica se o registro foi bem-sucedido
        console.log('Verificando sucesso no Vuex:', this.successFromStore);

        if (this.successFromStore) {
          this.success = true;
          this.error = '';

          window.location.reload(); 

        } else {
          console.error('Erro: Registro não foi bem-sucedido.');
          this.error = this.errorFromStore || 'Erro ao registrar, tente novamente.';
        }
      } catch (err) {
        console.error('Erro ao realizar o registro:', err);
        this.error = 'Falha no cadastro. Tente novamente.';
        this.success = false;
      }
    },
  },
};
</script>