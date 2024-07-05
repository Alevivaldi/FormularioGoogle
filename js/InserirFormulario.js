"use strict";
const instrucoesContainer = document.querySelector(`#instrucoes .container`);
const instrucoesH2 = document.createElement(`h2`);
const ol = document.createElement(`ol`);
if (instrucoesContainer !== null && instrucoesH2 !== null) {
    instrucoesContainer.appendChild(instrucoesH2);
    instrucoesContainer.appendChild(ol);
}
instrucoesH2.textContent = `Para reponder ao formulário para construção do seu site siga os passos abaixo:`;
const instrucoesLi1 = document.createElement(`li`);
const instrucoesLi2 = document.createElement(`li`);
const instrucoesLi3 = document.createElement(`li`);
const instrucoesLi4 = document.createElement(`li`);
ol.appendChild(instrucoesLi1);
ol.appendChild(instrucoesLi2);
ol.appendChild(instrucoesLi3);
ol.appendChild(instrucoesLi4);
instrucoesLi1.textContent = `Faça login em sua conta do Google.`;
instrucoesLi2.textContent = `Preencha os dados do formulário`;
instrucoesLi3.textContent = `Alguns campos são opcionais`;
instrucoesLi4.textContent = `Ao termino, clique em enviar!`;
