/*

coluna (vertical) = j
linha (horizontal = i 

0 1 2
1
2



*/

const matriza = [
    [5, 8, 3],
    [4, 2, 9],
    [1, 7, 6]];

const matrizb = [
    [1, 3, 8],
    [1, 2, 5],
    [7, 6, 4]];

    function somaMatrizes(matriza, matrizb) {
		let resultado = [];
		for (let i = 0; i < matriza.length; i++) {
				resultado[i] = [];
				for (let j = 0; j < matriza[i].length; j++) {
						resultado[i][j] = matriza[i][j] + matrizb[i][j];
				}

		}
		return resultado; }
        console.table(somaMatrizes(matriza, matrizb))