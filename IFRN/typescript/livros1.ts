class Livro {
    private _titulo : string; // _ = são privadas e não podem ser acessadas diretamente fora da classe.
    private _autor : string;
    private _preco : number;

    constructor(titulo : string, autor : string, preco : number) { //método chamado quando você cria um novo livro. Ele pega os dados que você passar (título, autor, preço) e usa para preencher as propriedades do livro.
        this._titulo = titulo;
        this._autor = autor;
        this._preco = preco; //Quando você cria um livro, é preenchido os valores de titulo, autor e preco nas propriedades privadas _titulo, _autor e _preco.
    }

    get preco() { //Getter (acessador) é utilizado para obter o valor do preço.
        return this._preco;
    }
    set preco(novo_preco : number) { // Setter (modificador) é utilizado para mudar o valor do preço, mas com uma regra (não pode ser negativo).
        if (novo_preco >= 0)
            this._preco = novo_preco;
        else 
            console.log("Não permitido valor negativo!");
    }

    descricao() : string {
        return `Livro: ${this._titulo}\nAutor: ${this._autor}\nPreço: R$ ${this._preco.toFixed(2)}`;    }
}

let livro1 = new Livro("1984", "George Orwell", 16.09);
let livro2 = new Livro("O Senhor dos Anéis (box)", "Tolkien", 129.90);
let livro3 = new Livro("Admirável mundo novo", "Huxley", 34.70);

let livros : Livro[] = [livro1, livro2, livro3];
livros.forEach(livro => {
    console.log(livro.descricao());
    console.log("------------");
});

livro2.preco = -1.99;
console.log(livro2.descricao());