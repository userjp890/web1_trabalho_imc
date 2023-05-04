const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const resultado = document.querySelector('#resultado')
const idade = document.querySelector('#idade')

const calcIMC = () => {
    if (altura.value != '' && peso.value != '' && idade.value != '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification = ''
        let imagem = ''

        if (idade.value < 60 ) {
            if (imc < 18.5) {
                imagem = document.getElementById("classificacao-img").innerHTML = "<img src='../img/magro.png'>"
                classification = 'Abaixo do peso'
            } else if (imc < 25) {
                imagem = document.getElementById("classificacao-img").innerHTML = "<img src='../img/normal.png'>"
                classification = 'peso normal'
            } else if (imc < 30) {
                imagem = document.getElementById("classificacao-img").innerHTML = "<img src='../img/sobrepeso.png' style>"
                classification = 'Acima do peso'
            } else if (imc < 35) {
                imagem = document.getElementById("classificacao-img").innerHTML = "<img src='../img/obesidade_grau_1.png'>"
                classification = 'Obesidade grau I'
            } else if (imc < 41) {
                imagem = document.getElementById("classificacao-img").innerHTML = "<img src='../img/obesidade_grau_2.png'>"
                classification = 'Obesidae grau II'
            } else {
                imagem = document.getElementById("classificacao-img").innerHTML = "<img src='../img/obesidade_grau_3.png'>"
                classification = 'Obesidade grau III'
            }
            resultado.innerHTML = `IMC: ${imc} (${classification})`
    

            
        } else {
            if (imc <= 22) {
                imagem = document.getElementById("classificacao-img").innerHTML = "<img src='../img/magro2.png'>"
                classification = 'Abaixo do peso'
            } else if (imc < 27) {
                imagem = document.getElementById("classificacao-img").innerHTML = "<img src='../img/normal2.png'>"
                classification = 'Adequado ou eutrófico'
            } else {
                imagem = document.getElementById("classificacao-img").innerHTML = "<img src='../img/sobrepeso2.png'>"
                classification = 'sobrepeso'
            }  

            resultado.innerHTML = `IMC: ${imc} (${classification})`

        }
    }  
        else {
            resultado.innerHTML = 'Preencha os campos'
        }
    
}