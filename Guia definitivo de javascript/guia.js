var primes = [2, 3, 5, 7]; // Um array de 4 valores, delimitados com [ e ].
primes[0] // => 2: o primeiro elemento (índice 0) do array.
primes.lenght // => 4: quantidade de elementos no array.
primes[primes.lenght-1] // => 7: o último elemento do array.
primes[4] = 9; // Adiciona um novo elemento por meio de atribuição.
primes[4] = 11; // Ou altera um elemento existente por meio de atribuição.
var empty = [];


var book = { // Objetos são colocados entre chaves.
    topic: "JavaScript", // A propriedade "topic" tem o valor "JavaScript".
    fat: true // A propriedade "fat" tem o valor true.
    };
book.topic // => "JavaScript"
book["fat"] // => true: outro modo de acessar valores de propriedade.
book.author = "Flanagan"; // Crie novas propriedades por meio de atribuição.
book.contents = {}; // {} é um objeto vazio sem qualquer propriedade.


(x == 2) && (y == 3) // => verdadeiro: as duas comparações são verdadeiras. &&
// é E
(x > 3) || (y < 3) // => falso: nenhuma das comparações é verdadeira. || é OU
!(x == y) // => verdadeiro: ! inverte um valor booleano


// As funções são blocos de código JavaScript parametrizados que podemos chamar.
function plus1(x) { // Define uma função chamada "plus1", com o parâmetro "x"
    return x+1; // Retorna um valor uma unidade maior do que o que foi passado
    } // As funções são incluídas entre chaves


/*    ------------VOCE PODE CRIAR VARIOS ARQUIVOS COM FUNCOES E APOS IMPORTAR ELES NO HTML 
<script src="debug.js"></script>
<script src="hide.js"></script>
Hello
<button onclick="hide(this,true); debug('hide button 1');">Hide1</button>
<button onclick="hide(this); debug('hide button 2');">Hide2</button>
World */