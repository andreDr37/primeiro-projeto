document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-contato").addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        // Aqui você pode adicionar código para lidar com o formulário de contato, como enviar os dados para um servidor ou exibir uma mensagem de confirmação.
    });
});
