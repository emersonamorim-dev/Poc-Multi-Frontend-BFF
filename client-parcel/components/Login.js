import { login } from '../redux/actions/userActions.js';
import store from '../redux/store.js';

const Login = () => {
    const form = document.createElement('form');
    form.innerHTML = `
        <h2>Entrar</h2>
        <input type="email" placeholder="Email" id="email" required />
        <input type="password" placeholder="Senha" id="password" required />
        <button type="submit">Entrar</button>
        <p id="error" style="color: red;"></p>
        <p id="success" style="color: green; display: none;">Login realizado com sucesso!</p>
    `;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log('Dados do formulário:', { email, password });

        // Dispatch do login via Redux store
        store.dispatch(login(email, password))
            .then(() => {

                document.getElementById('success').style.display = 'block';
                document.getElementById('error').innerText = '';

                setTimeout(() => {
                    window.location.href = '/'; 
                }, 1000);
            })
            .catch((error) => {
                document.getElementById('error').innerText = 'Falha no login. Tente novamente.';
                document.getElementById('success').style.display = 'none';
            });
    });

    return form;
};

export default Login;


