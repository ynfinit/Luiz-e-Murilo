const { constants } = require('buffer')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    })


let calcados = []

let adi2000 = {
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
            remove
    }

   })

 }