const { constants } = require('readline')
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
    cor: 'preto'
}
 calcados.push(adi2000)


 exibirmenu()

 function exibirmenu(){
    console.log(`
    x-------------Menu--------------x
    |  1. Cadastrar calçado         |
    |  2. Pesquisar calçado         |
    |  3. Remover calçado           |
    |  4. Listar todos os calçados  |
    |  5. Editar um calçado         |
    |  6. Sair                      |
    x-------------------------------x
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
            editar()
            break
        case '6':
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
                       calcados.push({ nome: nome, maraca: marca, tamanho: tamanho, material: material, cor: cor})
                        console.log(`Tenis cadastrado com sucesso!`)
                        exibirmenu()
                    })
                })
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
            console.log('Calçado removido com sucesso!')
            exibirmenu()
        })
    }
}


function listar(){
    if(calcados == 0 ){
        console.log('Esta vazio')
        exibirmenu()
    }
    else{
        console.log(calcados)
        exibirmenu()
    }
}
function pesquisar(){
    if (calcados.length == 0){
        console.log('Não a nenhum calçado cadastrado!')
    }else{
            rl.question('Qual o nome do tenis que você deseja procurar?' , (pesquisa) => {
            for (let i = 0; i < calcados.length; i++) {
                if (calcados[i].nome == pesquisa) {
                    console.log(`
                    Seu calçado é ${calcados[i].nome}
                    Sua marca é ${calcados[i].marca}
                    Seu tamanho é ${calcados[i].tamannho}
                    Seu material é ${calcados[i].material}
                    Sua cor é ${calcados[i].cor}
                    Sua estampa é ${calcados[i].estampa}
                    `)
                }exibirmenu()
            }
        })
}}      

function editar(){
    if (calcados.length == 0 ){
        console.log('Nenhum calçado listado!')
    }else {
            for (let i = 0;i < calcados.length; i ++) {
            console.log(`Nossos calçados são ${calcados[i].nome}`)
            rl.question(`Qual o número do calçado que deseja editar` , (numero) => {
                if (numero > 0 && numero <= calcados.length){
                    rl.question('Digite o novo nome do tênis' , (nome) => {
                        rl.question('Digite a nova marca do seu tênis' , (marca) => {
                            rl.question('Digite o novo tamanho do seu tênis' , (tamanho) => {
                                rl.question('Digite o novo material do seu tênis' , (material) =>{
                                    rl.question('Digite a nova cor do seu tênis' , (cor) =>{
                                        calcados[numero -1] = {
                                            nome,
                                            marca,
                                            tamanho,
                                            material,
                                            cor
                                        }
                                        console.log('Calçado editado con sucesso')
                                        exibirmenu()
                                    })
                                })
                            })
                        })
                    })
                }
        })
    }
 }}       