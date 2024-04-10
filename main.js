document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-buscar-cep').addEventListener('click', function() {
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        xhttp.open('GET', endpoint);
        xhttp.send();
    })
})


$(document).ready(function () {
    $('#btn-buscar-cep').click(function() {
        const cep = $('cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
    })
})