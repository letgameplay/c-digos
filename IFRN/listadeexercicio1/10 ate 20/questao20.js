function cadast() {
    nome = document.getElementById('nm').value.trim();
    email = document.getElementById('em').value.trim();
    telefone = document.getElementById('tele').value.trim();
    senha = document.getElementById('sen').value                                                                                                                                                                         
    confirmacao = document.getElementById('confse').value

    ernome = alert("nomeerror")
    eremail = alert("emailerror")
    ertel = alert("telerror")
    ersenha = alert("senhaerror")
    erconf = alert("conferror")

    valido = true

    if (nome === ""){
        ernome.textContent = "NOME NÃO INFORMADO";
        valido = false }
        else {
            nomeerror.textContent = ""
        }

        if (email === "") {
            ermail.textContent = "EMAIL NÃO INFORMADO";
            valido = false; }
            else if (!validarEmail(email)) {
                ermail.textContent = "EMAIL INVÁLIDO"
                valido = false            }
        }


