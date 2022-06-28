# Aula de Classes

## Parte 1

### Crie uma Classe chamada Register com a propriedade `this.data` inicializada como um objeto vazio.

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


```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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


### Crie uma Classe chamada Database com a propriedade `this.registers` inicializada como um objeto vazio.

```javascript
// GABARITO
class Database {
  constructor() {
    this.registers = {}
  }
}
```

### A classe deve possuir os métodos e propriedades:

### `.createRegister(name)`

```javascript
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

```javascript
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

```javascript
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

  load(filename) {
    this.registers = JSON.parse(fs.readFileSync(`${filename}.tet`, 'utf-8'))
  }
}
```