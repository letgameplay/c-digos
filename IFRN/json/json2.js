// recebendo dados

const url = 'https://jsonplaceholder.typicode.com/users'

fetch (url) // "capturar" o json
    .then (response => response.json()) // json em javascript
    .then (data => {
        // Iterando sobre os dados recebidos
		data.forEach(user => {
			console.log('Nome:', user.name);
			console.log('Email:', user.email);
			console.log('---');
		});
	})
	.catch(error => {
		console.error('Erro ao obter dados:', error);
});

    // response.json -> quando não tem uma string jason
    // json.parse -> quando tem uma string json 