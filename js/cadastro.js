import { registrar } from "./autenticador.js";
import { buscarCep } from "./services/viacep.js";

const form = document.querySelector('#form-cadastro');
const campoCep = document.querySelector('#cep');

// Busca de endereço pelo CEP
campoCep.addEventListener('blur', async () => {
    if (!campoCep.value) return;

    const aviso = document.querySelector('#aviso');

    try {
        const endereco = await buscarCep(campoCep.value);

        document.querySelector('#logradouro').value = endereco.logradouro || '';
        document.querySelector('#bairro').value = endereco.bairro || '';
        document.querySelector('#cidade').value = endereco.localidade || '';
        document.querySelector('#uf').value = endereco.uf || '';

        // Se deu certo, limpa qualquer aviso anterior
        aviso.textContent = '';
    } catch (error) {
        console.error(error.message);

        // Limpa os campos se o CEP for inválido ou der erro
        document.querySelector('#logradouro').value = '';
        document.querySelector('#bairro').value = '';
        document.querySelector('#cidade').value = '';
        document.querySelector('#uf').value = '';

        // Mostra mensagem de erro para o usuário
        aviso.textContent = 'CEP inválido ou não encontrado.';
        aviso.style.color = 'red'; // opcional: deixa a mensagem em vermelho
    }
});


// Cadastro do usuário
form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const usuario = {
        nome: document.querySelector("#nome").value,
        email: document.querySelector("#email").value,
        senha: document.querySelector("#senha").value,
        cep: document.querySelector("#cep").value,
        logradouro: document.querySelector("#logradouro").value,
        bairro: document.querySelector("#bairro").value,
        cidade: document.querySelector("#cidade").value,
        uf: document.querySelector("#uf").value
    };
    const aviso = document.querySelector('#aviso'); 
    
    try { 
        registrar(usuario); 
        aviso.textContent = '';
        form.reset();
    } catch (err) {
        // Mostra pop-up de erro
        alert(err.message); // "email já cadastrado"

        // Redireciona para tela de login
        window.location.href = "login.html"; 
    }
});