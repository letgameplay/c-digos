function contpal() {
    let texto = document.getElementById("pf").value;
    let letra = document.getElementById("letr").value;
    let contador = 0
    for (let i = 0; i < texto.length; i++){
        if (texto.charAt(i) === letra) {
            contador++;
        }
    }
    document.getElementById("resultado").innerHTML =
    `A letra ${letra} aparece ${contador} vezes na sentença`
}