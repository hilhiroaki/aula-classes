# Aula de Classes

## Parte 1
Nessa parte, vamos exercitar o conceito de classes, criar métodos para manipular os dados internos da classe e conhecer duas sintaxes novas: `get` e `delete`.

### Crie uma Classe chamada Register com a propriedade `this.data` inicializada como um objeto vazio.
Teste que funciona executando o seguinte código:
```
const register = new Register()
console.log(register) // { Register: { data: {} }}
```


### A classe deve possuir os métodos e propriedades:

### `.add(data)`
Recebe qualquer tipo de dado, cria um `id` usando o método `getToken()` e adiciona no `this.data`. Retorna o objeto inteiro.
```
{
  [id]: data
}
```

### `.length`
A classe deve possuir a propriedade `length`. Caso não lembre a diferença entre método e propriedade, você pode relembrar [aqui](https://tetchan.notion.site/Lista-de-m-todos-nativos-d37808a1cc0e455aa8c5add48acfd3ba).

A propriedade `length` deve retornar a quantidade de chaves no objeto `this.data`.

Você deverá usar a [sintaxe de get](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/get) para solucionar essa etapa.

### `.findById(id)`
Recebe uma string `id`, busca uma chave com o valor dessa string e retorna o valor armazenado nessa chave.

### `.updateById(id, newValue)`
Recebe uma string `id`, busca uma chave com o valor dessa string, substitui o valor armazenado pelo `newValue` e retorna o objeto completo.

### `.deleteById(id)`
Recebe uma string `id`, busca uma chave com o valor dessa string e [deleta](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) a chave e o valor. Retorna o objeto completo.


### `.addMany(dataArray)`
Recebe uma array de dados e adiciona no `this.data` cada uma delas, atribuindo um `id` único usando o método `getToken`. Retorna o objeto completo no final.
