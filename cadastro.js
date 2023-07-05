function pressionarBotaoCadastrar() {
    var botaoCadastrar = document.querySelector('.btn-cadastrar');
    if (botaoCadastrar) {
      botaoCadastrar.click();
    }
  }

  function handleKeyPress(event) {
    if (event.keyCode === 13) { // Verifica se a tecla pressionada é a tecla Enter (código 13)
        pressionarBotaoCadastrar(); // Chama a função para acionar o clique no botão "Cadastrar"
    }
  }
  
  