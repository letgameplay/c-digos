const url = 'https://jsonplaceholder.typicode.com/posts'

fetch (url)
    .then (response => response.json())
    .then (data => usuarios(data))
    .catch(error => {
		const ListaPost = document.getElementById('listapost')
		ListaPost.innerHTML = `<div class="error"> Ocorreu um erro: ${error.message}</div>`
    })

    function usuarios(posts){
        const postagem = document.getElementById(postagem)
        postagem.innerHTML = ''

    const post = document.getElementById('ElemEsc')
    }