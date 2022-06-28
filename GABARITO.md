# Aula de Classes

## Parte 1
Nessa parte, vamos exercitar o conceito de classes, criar métodos para manipular os dados internos da classe e conhecer duas sintaxes novas: `get` e `delete`.

### Crie uma Classe chamada Register com a propriedade `this.data` inicializada como um objeto vazio.
Teste que funciona executando o seguinte código:

```javascript
const register = new Register()
console.log(register) // { Register: { data: {} }}
```


```javascript
// GABARITO
class Register {
  constructor() {
    this.data = {}
  }
}
```

### A classe deve possuir os métodos e propriedades:

### `.add(data)`
Recebe qualquer tipo de dado, cria um `id` usando o método `getToken()` e adiciona no `this.data`. Retorna o objeto inteiro.
```
{
  [id]: data
}
```


```
// GABARITO
class Register {
  constructor() {
    this.data = {}
  }

  add(data) {
    let id = getToken()
    this.data[id] = data
    return this.data
  }
}
```

### `.length`
A classe deve possuir a propriedade `length`. Caso não lembre a diferença entre método e propriedade, você pode relembrar [aqui](https://tetchan.notion.site/Lista-de-m-todos-nativos-d37808a1cc0e455aa8c5add48acfd3ba).

A propriedade `length` deve retornar a quantidade de chaves no objeto `this.data`.

Você deverá usar a [sintaxe de get](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/get) para solucionar essa etapa.

```
// GABARITO
class Register {
  constructor() {
    this.data = {}
  }

  add(data) {
    let id = getToken()
    this.data[id] = data
    return this.data
  }

  get length() {
    return Object.keys(this.data).length
  }
}
```

### `.findById(id)`
Recebe uma string `id`, busca uma chave com o valor dessa string e retorna o valor armazenado nessa chave.

```
// GABARITO
class Register {
  constructor() {
    this.data = {}
  }

  add(data) {
    let id = getToken()
    this.data[id] = data
    return this.data
  }

  get length() {
    return Object.keys(this.data).length
  }

  findById(id) {
    return this.data[id]
  }
}
```

### `.updateById(id, newValue)`
Recebe uma string `id`, busca uma chave com o valor dessa string, substitui o valor armazenado pelo `newValue` e retorna o objeto completo.

```
// GABARITO
class Register {
  constructor() {
    this.data = {}
  }

  add(data) {
    let id = getToken()
    this.data[id] = data
    return this.data
  }

  get length() {
    return Object.keys(this.data).length
  }

  findById(id) {
    return this.data[id]
  }

  updateById(id, newValue) {
    this.data[id] = newValue
    return this.data
  }
}
```

### `.deleteById(id)`
Recebe uma string `id`, busca uma chave com o valor dessa string e [deleta](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) a chave e o valor. Retorna o objeto completo.

```
// GABARITO
class Register {
  constructor() {
    this.data = {}
  }

  add(data) {
    let id = getToken()
    this.data[id] = data
    return this.data
  }

  get length() {
    return Object.keys(this.data).length
  }

  findById(id) {
    return this.data[id]
  }

  updateById(id, newValue) {
    this.data[id] = newValue
    return this.data
  }

  deleteById(id) {
    delete this.data[id]
    return this.data
  }
}
```


### `.addMany(dataArray)`
Recebe uma array de dados e adiciona no `this.data` cada uma delas, atribuindo um `id` único usando o método `getToken`. Retorna o objeto completo no final.

```
// GABARITO
class Register {
  constructor() {
    this.data = {}
  }

  add(data) {
    let id = getToken()
    this.data[id] = data
    return this.data
  }

  get length() {
    return Object.keys(this.data).length
  }

  findById(id) {
    return this.data[id]
  }

  updateById(id, newValue) {
    this.data[id] = newValue
    return this.data
  }

  deleteById(id) {
    delete this.data[id]
    return this.data
  }

  addMany(dataArray) {
    dataArray.forEach(data => {
      let id = getToken()
      this.data[id] = data
    })
    return this.data
  }
}
```

## Parte 2
Nessa parte, vamos criar outra classe, exercitar a interação entre elas, conhecer a sintaxe `instanceof` e treinar o uso da lib `fs`.


### Crie uma Classe chamada Database com a propriedade `this.registers` inicializada como um objeto vazio.
Teste que funciona executando o seguinte código:
```
const database = new Database()
console.log(database) // { Database: { registers: {} }}
```

```
// GABARITO
class Database {
  constructor() {
    this.registers = {}
  }
}
```

### A classe deve possuir os métodos e propriedades:

### `.createRegister(name)`
Recebe uma string `name`, adiciona em `this.registers` a chave com valor de `name` e em valor uma nova instância de Register. Retorna o objeto de registros.
- Caso `name` já exista em `this.registers` você deve retornar apenas o objeto, sem adicionar nada novo.

```
// GABARITO
class Database {
  constructor() {
    this.registers = {}
  }

  createRegister(name) {
    if (!this.registers[name]) this.registers[name] = new Register()
    return this.registers
  }
}
```

### `.addRegister(name, register)`
Recebe uma string `name`, adiciona em `this.registers` a chave com valor de `name` e em valor uma instância externa de Register. 
- Você deve verificar se a variável register é uma [instância](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof) de Register. 
- Adicione a chave no objeto apenas se for do tipo Register. 
- Caso não seja, apenas retorne o objeto completo
- Caso `name` já exista em `this.registers` você deve retornar apenas o objeto, sem adicionar nada novo.

```
// GABARITO
class Database {
  constructor() {
    this.registers = {}
  }

  createRegister(name) {
    this.registers[name] = new Register()
    return this.registers
  }

  addRegister(name, register) {
    if (register instanceof Register) this.registers[name] = register
    return this.registers
  }
}
```

### `.length`
A classe deve possuir a propriedade `length`. Caso não lembre a diferença entre método e propriedade, você pode relembrar [aqui](https://tetchan.notion.site/Lista-de-m-todos-nativos-d37808a1cc0e455aa8c5add48acfd3ba).

A propriedade `length` deve retornar a quantidade de chaves no objeto `this.data`.

Você deverá usar a [sintaxe de get](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/get) para solucionar essa etapa.

```
// GABARITO
class Database {
  constructor() {
    this.registers = {}
  }

  createRegister(name) {
    this.registers[name] = new Register()
    return this.registers
  }

  addRegister(name, register) {
    if (register instanceof Register) this.registers[name] = register
    return this.registers
  }

  get length() {
    return Object.keys(this.registers).length
  }
}
```


### `.save(filename)`
Recebe uma string `filename` e salva todos os registers em um arquivo com extensão `.tet`. Lembre-se de usar os métodos `JSON.stringify` e `JSON.parse` para lidar com entrada e saída de arquivos.

```javascript
// GABARITO
const fs = require('fs')

class Database {
  constructor() {
    this.registers = {}
  }

  createRegister(name) {
    this.registers[name] = new Register()
    return this.registers
  }

  addRegister(name, register) {
    if (register instanceof Register) this.registers[name] = register
    return this.registers
  }

  get length() {
    return Object.keys(this.registers).length
  }

  save(filename) {
    fs.writeFileSync(`${filename}.tet`, JSON.stringify(this.registers))
  }
}
```

### `.load(filename)`
Recebe uma string `filename` e carrega um arquivo um arquivo com extensão `.tet` todos os registers em . Lembre-se de usar os métodos `JSON.stringify` e `JSON.parse` para lidar com entrada e saída de arquivos.

``````javascript
// GABARITO
const fs = require('fs')

class Database {
  constructor() {
    this.registers = {}
  }

  createRegister(name) {
    this.registers[name] = new Register()
    return this.registers
  }

  addRegister(name, register) {
    if (register instanceof Register) this.registers[name] = register
    return this.registers
  }

  get length() {
    return Object.keys(this.registers).length
  }

  save(filename) {
    fs.writeFileSync(`${filename}.tet`, JSON.stringify(this.registers))
  }

  load(filename) {
    
    this.registers = JSON.parse(fs.readFileSync(`${filename}.tet`, 'utf-8'))
  }
}
```
