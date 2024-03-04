function submeter() {
    let confirma = confirm("Seguir");
    if (confirma == true) {
        let massa = document.getElementById("massa").value;
        let altura = document.getElementById("altura").value;
        document.getElementById("resultado").innerHTML =
            "<h3> Informações Recebidas</h3>" +
            "<p>Massa: " + massa + "</p>" +
            "<p>Altura: " + altura + "</p>";
        
        let calculo = massa / (altura ** 2)
        document.getElementById

    }
    else {
        document.getElementById("resultado").innerHTML =
        "<h2>Ação Cancelada</h2>";
    }
}