document.addEventListener("DOMContentLoaded", function () {
    let nomes = [];
    
    document.getElementById("adicionar").addEventListener("click", function () {
        let nome = document.getElementById("nome").value;
        if (nome) {
            nomes.push(nome);
            document.getElementById("lista-nomes").innerHTML += "<li>" + nome + "</li>";
            document.getElementById("nome").value = "";
        }
    });
    
    document.getElementById("sortear").addEventListener("click", function () {
        if (nomes.length > 0) {
            let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
            document.getElementById("resultado").textContent = "Sorteado: " + sorteado;
        }
    });
});
