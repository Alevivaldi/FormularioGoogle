const containerH1=document.querySelector(`header .container`);
const h1=document.createElement(`h1`);
if(containerH1!==null){
    containerH1.innerHTML=`<h1>Formulários Disponíveis para voçê inserir na plataforma;</h1>`;
}else{
    console.log(Error);
}
const nav1=document.createElement(`nav`)
if(containerH1!==null){
    containerH1.append(nav1);
}else{
    console.log(Error);
}
const ul1=document.createElement(`ul`);
nav1.appendChild(ul1);
const li1=document.createElement(`li`);
const li2=document.createElement(`li`);
const li3=document.createElement(`li`);
ul1.appendChild(li1);
ul1.appendChild(li2);
ul1.appendChild(li3);
li1.innerHTML=`<a href="index.html">Início</a>`;
li2.innerHTML=`<a href="formularios.html">Formulários</a>`;
li3.innerHTML=`<a href="inserir_formulario.html">Sobre Formulário</a>`;

const containerH2=document.querySelector(`#lista-formularios .container`);
const h2=document.createElement(`h2`);
const ulForm=document.createElement(`ul`);

if(containerH2!==null){
    containerH2.appendChild(h2);
    h2.textContent=`Escolha um formulário para inserir:`;
    containerH2.appendChild(ulForm);
}else{
    console.log(Error);
}

const liForm=document.createElement(`li`);
ulForm.appendChild(liForm);
const h3=document.createElement(`h3`)
liForm.appendChild(h3)
h3.textContent=`Formulário de Levantamento de Requisitos`;
const pForm=document.createElement(`p`);
liForm.appendChild(pForm)
pForm.textContent=`Um formulário simples para voçê nos informar quais suas necessidades de negócio para seu site web`
const aForm = document.createElement(`a`);
aForm.setAttribute("href","https://forms.gle/LcGMzzAsgcANNQQN7");
liForm.appendChild(aForm);
aForm.textContent=`Inserir`;
const foter =document.querySelector(`footer .container p`);
if(foter!==null){
    foter.textContent=`Contato: telefone: (21) 9 9108-1578 | E-mail: thg6321@gmail.com`
}else{
    console.log(Error);
}
