const prompt = require("prompt-sync")()

const cadastro = []
const editarProduto = null

while(true) {
console.log(`
Menu:

1. Cadastrar produto:
2. Listar produtos:
3. Atualizar produtos:
4. Remover produtos:
5. Finalizar.
`)
}
function adicionarProduto() {

    const nome = prompt("Digite o nome do produtos: ")
    const valor = parseInt(prompt("Digite o valor do produto: "))
    if (nome && !isNaN(valor)) {
        if(editarProduto != null) {
            cadastro[editarProduto] = {nome, valor}
            editarProduto = null;
            console.log("Produto editado com sucesso!")
        }
    }else {
        cadastro.push({nome, valor})
        console.log("Produto adicionado com sucesso!")
    }
    return
}