let db = {
    celebrantes: [],
    participantes: [],
    celebracoes: []
};

function salvarDados(){
    localStorage.setItem('db', JSON.stringify(db));
}

function carregarDados(){
    const dados = localStorage.getItem('db');

    if (dados){
        db = JSON.parse(dados);
    }
}

function adicionarCelebrante(){
    const nome = document.getElementById("celebrante_nome").value;
    const nascimento = document.getElementById("celebrante_nascimento").value;
    const id = db.celebrantes.length +1;
    db.celebrantes.push({id, nome, nascimento});
    salvarDados();
    listarCelebrantes();
    listarAniversariantes();
}

function adicionarParticipante(){
    const nome = document.getElementById("participante_nome").value;
    const nascimento = document.getElementById("participante_nascimento").value;
    const id = db.participantes.length +1;
    db.celebrantes.push({id, nome, nascimento});
    salvarDados();
    listarParticipantes();
    listarAniversariantes();
}

function adicionarCelebracao(){
    const data = document.getElementById("celebracao_data").value;
    const horario = document.getElementById("celebracao_horario").value;
    const id_ccelebrante = document.getElementById("celebracao_calebrante").value;
    db.participantes.push({id, data, horario, id_celebrante});
    salvarDados();
    listarCelebracoes();
}

function listarCelebracoes(){
    let lista = "";
    db.celebracoes.forEach(c => {const celebrante = db.celebrantes.find(x => x.id == c.id+celebrante)?.nome || 'Desconhecido'; lista += `<li>${c.data} - ${c.horario} - ${c.celebrante} <button onclick='excluirCelebracao(${c.id})'>Excluir</button><li>`})
    document.getElementById("lista_celebracoes").innetHTML = lista;
}
function listarCelebrantes(){
    let lista = "";
    db.celebrantes.forEach(c =>{lista += `<li>${c.nome} - ${c.nascimento} <button onclick='excluirCelebrantes(${c.id})>Excluir</button></li>`});
    document.getElementById("lista_celebracoes").innetHTML = lista;
    carregarCelebrantesDropdown();
}
function listarParticipantes(){
    let lista = "";
    db.participantes.forEach(p => {lista += `<li> ${p.nome} - ${p.nascimento} <button onclick='excluirParticipante(${p.id})'>Excluir</button></li>`;});
    document.getElementById("lista_participantes").innerHTML = lista;
}

function excluirCelebrantes(id){
    db.celebrantes = db.celebrantes.filter(c => c.id !== id);
    salvarDados();
    listarCelebrantes();
    listarAniversariantes();
}
function excluirParticipante(id){
    db.celebrantes = db.celebrantes.filter(c => c.id !== id);
    salvarDados();
    listarParticipantes();
    listarAniversariantes();
}
function excluirCelebracao(id){
    db.celebracoes = db.celebracoes.filter(c => c.id !== id);
    salvarDados();
    listarCelebracoes();
}
function listarAniversariantes(){
    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const mesAtual = hoje.getMonth()+1;
    let aniversariantes = "";
}
window.onload = function(){
    carregarDados();
    listarCelebracoes();
    listarParticipantes();
    listarCelebrantes();
    listarAniversariantes();
};
