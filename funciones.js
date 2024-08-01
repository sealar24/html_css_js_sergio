console.log('ESTOY VIVO')

const FORMULARIO = document.getElementById('formulario')
const RESET = document.getElementById('reset')
FORMULARIO.addEventListener('click', async (e) => {
    try {
        const NOMBRE = document.getElementById('nombre').value
        const APELLIDO = document.getElementById('apellido').value
        if(NOMBRE!=='' && APELLIDO!==''){
            console.log('Exitoso!')
            alert('Nombre: ' + document.getElementById('nombre').value)
            alert('Apellido: ' + document.getElementById('apellido').value)
            e.preventDefault();
            const RESULTADO = document.getElementById('resultado')
            const H1_1 = document.createElement('h1')
            const H1_2 = document.createElement('h1')
            H1_1.setAttribute('id', "h1_hijo1")
            H1_2.setAttribute('id', "h1_hijo2")
            H1_1.textContent=NOMBRE
            H1_2.textContent=APELLIDO
            RESULTADO.appendChild(H1_1)
            RESULTADO.appendChild(H1_2)
        }
    } catch {
        console.log('Error')
    }
})

RESET.addEventListener('click', async () => {
    if(document.getElementById('h1_hijo1')){
        document.getElementById('h1_hijo1').remove()
    }
    if(document.getElementById('h1_hijo2')){
        document.getElementById('h1_hijo2').remove()
    }
})