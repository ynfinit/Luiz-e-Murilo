const { constants } = require('buffer')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    })


let calcados = []

let adi2000 = {
    nome: 'adi2000',
    marca: 'adidas',
    tamannho: 43,
    material: 'couro de poliuretano',
    cor: 'preto',
    estampa: ''
}
 calcados.push(adi2000)


 exibirmenu()

 function exibirmenu(){
    console.log(`
    Menu:
    1. Cadastrar calçado
    2. Pesquisar calçado
    3. Remover calçado
    4. Listar todos os calçados
    5. Sair
   `)


   rl.question('O que deseja fazer?', (opcao) => {
    switch (opcao){
        case'1':
            cadastrarTenis()
            break
        case'2':
            pesquisar()
            break
        case'3':
            remover()
            break
        case '4':
            listar()
            break
        case '5':
            console.log('Saindo do programa.')
            rl.close()
            break
        default:
            console.log('Opção invalida, tente novamente.')
            exibirmenu()
            break
    }

   })

 }

 function cadastrarTenis(){
    rl.question('Digite o nome do tenis: ', (nome) => {
        rl.question('Digite a marca do tenis: ', (marca) => {
            rl.question('Digite o tamanho do tenis: ', (tamanho) => {
                rl.question('Digite o material do tenis: ', (material) => {
                    rl.question('Digite a cor do tenis: ', (cor) => {

                    })
                })
        funcionarios.push({ nome: nome, maraca: marca, tamanho: tamanho, material: material, cor: cor})
        console.log(`Tenis cadastrado com sucesso!`)
        exibirMenu()
        })
    })
})
}


function remover(){
    if(calcados.length == 0){
        console.log('Não a nenhum tenis cadastrado.')
        exibirmenu()
    }
    else{
        console.log('Lista de todos os tenis: ')
        calcados.forEach((calcados, index) => {
            console.log(`${index + 1}. nome:${calcados.nome}`)
        })
        rl.question('Digite o numero do elemento que deseja remover:', (opcao) => {
            calcados.splice(opcao -1, 1)
            console.log('Elemento removido com sucesso!')
            exibirmenu()
        })
    }
}


function listar(){
    if(calcados == 0 ){}
}