function resultado() {
    const id = 64 //id da útima partida
    const url = `https://worldcupjson.net/matches${id}`


    fetch (url)
    .then (response => response.json())
    .then (data => showfinal(data))
    .catch(error => console.error('Erro ao buscar dados:', error));

}
    function showfinal(final) {
        const ListaPost = document.getElementById('listapost')
        ListaPost.innerHTML = ''

        const post document.createElement('div')
        post.classname = 'post'
        post.innerHTML = ``
        }