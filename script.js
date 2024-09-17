document.addEventListener('DOMContentLoaded', () => {
    const botaoMenu = document.getElementById('botao-menu');
    const menuLateral = document.getElementById('menu-lateral');
    const body = document.body;

    // Abrir o menu ao clicar no botão
    botaoMenu.addEventListener('click', () => {
        menuLateral.classList.toggle('open');
        body.classList.toggle('menu-open');
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', (e) => {
        if (menuLateral.classList.contains('open') &&
            !menuLateral.contains(e.target) &&
            e.target !== botaoMenu) {
            menuLateral.classList.remove('open');
            body.classList.remove('menu-open');
        }
    });
});

// Função para exibir o formulário correto com base nas opções de voluntariado selecionadas
function mostrarFormulario() {
    const carona = document.getElementById('carona').checked;
    const atendimento = document.getElementById('atendimento').checked;

    // Lista de IDs dos formulários
    const formIds = ['formCarona', 'formAtendimento', 'formMisto'];

    // Esconde todos os formulários e remove a classe "act"
    formIds.forEach(id => {
        const element = document.getElementById(id);
        element.style.display = 'none';
        element.classList.remove('act');
    });

    // Determina qual formulário deve ser exibido e adiciona a classe "act"
    if (carona && atendimento) {
        const formMisto = document.getElementById('formMisto');
        formMisto.style.display = 'flex';
        formMisto.classList.add('act');
    } else if (carona) {
        const formCarona = document.getElementById('formCarona');
        formCarona.style.display = 'flex';
        formCarona.classList.add('act');
    } else if (atendimento) {
        const formAtendimento = document.getElementById('formAtendimento');
        formAtendimento.style.display = 'flex';
        formAtendimento.classList.add('act');
    }
}


// Adiciona o ouvinte de evento para o envio do formulário
document.getElementById('volunteerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    // Exibe uma mensagem de confirmação
    document.getElementById('confirmation2').style.display = 'block';
    
    // Limpa o formulário
    this.reset();
});


document.getElementById('sponsorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    // Exibe uma mensagem de confirmação
    document.getElementById('confirmation1').style.display = 'block';
    
    // Limpa o formulário
    this.reset();
});
