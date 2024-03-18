function pe() {
    n = document.getElementById("email").value 
    if (n.includes ("@") && n.includes (".") )
    alert ("email validado")
    else
    alert("email não válido")
}