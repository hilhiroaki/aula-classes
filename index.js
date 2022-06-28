import getToken from './getToken.js'
import fs from 'fs'

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

export {Database, Register}