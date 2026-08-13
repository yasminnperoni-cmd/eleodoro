
    const botoes = document.querySelectorAll(".btn-interacao");

    botoes.forEach(function (botao) {
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

    const btnTemaEscuro = ocument.querySelector(".btn-tema-escuro");

    btnTemaEscuro.addEventListener ("click", mudatema);

    function mudatema() {
        const corpopagina = document.body;
        if (corpopagina.classlist.contains("tema-escuro")) {
            corpopagina.classlist.remove("tema-escuro");
        } else {
            corpopagina.classlist.add ("tema-escuro");
        }
    }