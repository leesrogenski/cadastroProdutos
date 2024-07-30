const prompt = require("prompt-sync")()

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

let escolha = prompt("Escolha uma opção: ");

switch (escolha) {
    case "1":
        cadastrarProduto()
        break;
        case "2":
            listarProduto()
            break;
            case "3":
            atualizarProduto()
            break;
            case "4":
                removerProduto()
                    break;
                    case "5":
                        console.log("Até breve!")()
                        break;
    default: 
    console.log("Dados inválidos, tente novamente! ")
        break;
}