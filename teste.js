import getToken from './getToken.js'
import fs from 'fs'
// Ignorar as linhas acima

// Escreva o código abaixo:

class Register {
    constructor() {
    this.data = {}
    }
    add(data) {
        let id = getToken()
        this.id = id 
        //this.data = this.id
        this.data[id] = data
        return this.data
    }
    length(){
        return (Object.keys(this.data).length)
    }
}
class Database {
}

const register = new Register()
console.log(register) // { Register: { data: {} }}
register.add("safada")
console.log(register)
register.length()
console.log(register.length())



const database = new Database()
console.log(database) // { Database: { registers: {} }}

// Ignorar a linha abaixo
export {Database, Register}