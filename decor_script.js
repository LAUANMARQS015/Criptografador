const form = document.querySelector('form');
const resultadoTextarea = document.querySelector('#resultado');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoTextarea = document.querySelector('#texto');
    const operacaoRadio = document.querySelector('input[name="operacao"]:checked');
    const texto = textoTextarea.value.trim();
    if (texto === '') {
        alert('Por favor, insira um texto');
        return;
    }
    if (operacaoRadio.value === 'criptografar') {
        resultadoTextarea.value = criptografar(texto);
    } else {
        resultadoTextarea.value = criptografar(texto);
    }
});

function criptografar(texto) 
    const substituicoes = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    let textoCriptografado = '';
    for (let letra of texto) 
        if (letra in substituicoes) {
            textoCriptografado += substituicoes[le]
            }