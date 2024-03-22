function palavrinhas() {
    let c = document.getElementById('frase').value.toLowerCase()
    let a = document.getElementById("pal1").value.toLowerCase()
    let b = document.getElementById("pal2").value.toLowerCase()

    if (c === '' && a === '' && b === '') {
        document.getElementById('resultado').innerHTML = 'Preencha todos os campos.';
        return;}

    let novafrase = c.replace(new RegExp(a, 'g'), b);
    document.getElementById('resultado').innerHTML = 
     `${novafrase}`
}
