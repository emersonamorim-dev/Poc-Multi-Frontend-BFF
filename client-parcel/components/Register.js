import { register } from '../redux/actions/userActions.js';
import store from '../redux/store.js';

const Register = () => {
    const form = document.createElement('form');
    form.innerHTML = `
        <h2>Cadastre-se</h2>
        <input type="text" placeholder="Nome" id="name" required />
        <input type="email" placeholder="Email" id="email" required />
        <input type="password" placeholder="Senha" id="password" required />
        <button type="submit">Registrar</button>
        <p id="error" style="color: red;"></p>
        <p id="success" style="color: green; display: none;">Cadastro realizado com sucesso!</p>
    `;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log('Dados do formulário:', { name, email, password });

        // Dispatch do register via Redux store
        store.dispatch(register(name, email, password))
            .then(() => {
                document.getElementById('success').style.display = 'block';
                document.getElementById('error').innerText = '';

                setTimeout(() => {
                    window.location.href = '/'; 
                }, 1000);
            })
            .catch((error) => {
                document.getElementById('error').innerText = 'Falha no cadastro. Tente novamente.';
                document.getElementById('success').style.display = 'none';
            });
    });

    return form;
};

export default Register;

