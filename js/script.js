"use strict";
const headerH1 = document.querySelector(`.container h1`);
if (headerH1 !== null) {
    headerH1.textContent = 'Administração de Formulários da APLRM Sistema';
}
else {
    console.log(Error);
}
const ul = document.querySelector(`nav ul`);
const ulLi1 = document.createElement("li");
const ulLi2 = document.createElement("li");
const ulLi3 = document.createElement("li");
if (ul !== null) {
    ul.appendChild(ulLi1).innerHTML = `<a href="index.html">Início</a>`;
    ul.appendChild(ulLi2).innerHTML = `<a href="formularios.html">Formulários</a>`;
    ul.appendChild(ulLi3).innerHTML = `<a href="inserir_formulario.html">Sobre Formulário</a>`;
}
else {
    console.log(Error);
}
const destaqueContainerH2 = document.querySelector(`#destaque .container h2`);
const destaqueContainerP = document.querySelector(`#destaque .container p`);
if (destaqueContainerH2 !== null) {
    destaqueContainerH2.textContent = `Bem-vindo à nossa plataforma para levantamento de requisitos da turma de Progamação FullStack SENAC-RJ 2024.1 -Nova Iguacu`;
}
else {
    console.log(Error);
}
const footer = document.querySelector(`footer .container p`);
if (destaqueContainerP !== null) {
    destaqueContainerP.textContent = `Aqui você pode facilmente inserir suas necessidades para construção do seu site.`;
}
else {
    console.log(Error);
}
;
if (footer !== null) {
    footer.textContent = `Contato: telefone: (21) 9 9108-1578 | E-mail: thg6321@gmail.com`;
}
else {
    console.log(Error);
}
