let homensInput = window.document.getElementById('qntd-homens')
let mulheresInput = window.document.getElementById('qntd-mulheres')
let criançasInput = window.document.getElementById('qntd-crianças')

const carneBovinaHomem = 500
const carneBovinaMulher = 300
const carneBovinaCriança = 200

const carneFrangoHomem = 200
const carneFrangoMulher = 200
const carneFrangoCriança = 100

const linguiçaGeral = 200

const refrigeranteHomem = 300
const refrigeranteMulher = 400
const refrigeranteCriança = 200

const cervejaHomem = 800
const cervejaMulher = 500


function calcularValores(homens, mulheres, crianças) {
    let carneBovinaTotal = ((homens * carneBovinaHomem) + (mulheres * carneBovinaMulher) + (crianças * carneBovinaCriança)) / 1000
    let carneFrangoTotal = ((homens * carneFrangoHomem)+ (mulheres * carneFrangoMulher) + (crianças * carneFrangoCriança)) / 1000
    let linguiçaTotal = ((homens * linguiçaGeral) + (mulheres * linguiçaGeral) + (crianças * linguiçaGeral)) / 1000
    let refrigeranteTotal = ((homens * refrigeranteHomem) + (mulheres * refrigeranteMulher) + (crianças * refrigeranteCriança)) / 1000
    let cervejaTotal = ((homens * cervejaHomem) + (mulheres * cervejaMulher)) / 1000

    return {
        carneBovina: carneBovinaTotal,
        carneFrango: carneFrangoTotal,
        linguiça: linguiçaTotal,
        refrigerante: refrigeranteTotal,
        cerveja: cervejaTotal
    }
}

function calcular() {
    let homens = Number(homensInput.value)
    let mulheres = Number(mulheresInput.value)
    let crianças = Number(criançasInput.value)

    const resultado = calcularValores(homens, mulheres, crianças)

    console.log(`Carne Bovina Total: ${resultado.carneBovina} kg`);
    console.log(`Carne de Frango Total: ${resultado.carneFrango} kg`);
    console.log(`Linguiça Total: ${resultado.linguiça} kg`);
    console.log(`Refrigerante Total: ${resultado.refrigerante} litros`);
    console.log(`Cerveja Total: ${resultado.cerveja} litros`);


    let resultadoDiv = window.document.getElementById('resultado')
    
    resultadoDiv.innerHTML = `
        <p>Carne Bovina Total: ${resultado.carneBovina} kg</p>
        <p>Carne de Frango Total: ${resultado.carneFrango} kg</p>
        <p>Linguiça Total: ${resultado.linguiça} kg</p>
        <p>Refrigerante Total: ${resultado.refrigerante} litros</p>
        <p>Cerveja Total: ${resultado.cerveja} litros</p>
    `

}
