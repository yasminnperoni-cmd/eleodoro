// Seleciona apenas os botões de interação
    const botoes = document.querySelectorAll(".btn-interacao");

    botoes.forEach(function (botao) {
        // Cada botão precisa ter seu próprio controle de "curtiu"
        let curtiu = false;

        botao.addEventListener("click", function botaoclicado() {
            console.log("fui clicado");
            let texto = botao.querySelector("span");
            
            if (curtiu === false) {
                texto.textContent = parseInt(texto.textContent) + 1;
                curtiu = true;
            } else {
                texto.textContent = parseInt(texto.textContent) - 1;
                curtiu = false;
            }
        });
    });