import getToken from './getToken.js'
import fs from 'fs'
// Ignorar as linhas acima

// Escreva o código abaixo:

let cover = ""

class Register {
    constructor(data){
        this.data = {}
    }

    add(data){
        let id = getToken()
        this.data[id] = data
        cover = id
        return this.data
    }

    get length(){
        return Object.keys(this.data).length
    }

    findById(id){
        return this.data[id]
    }

    updateById(id, newValue){
        this.data[id] = newValue
        return this.data
    }

    deleteById(id){
        delete this.data[id]
        return this.data
    }

    addMany(dataArray){
       dataArray.map(element => {
            let id = getToken()
            this.data[id] = element})
        return this.data
    }
}

const register = new Register()
console.log("TESTE PARA ADD")
console.log(register) 
register.add("batata")
register.add("cenoura")
console.log(register)
console.log(register.data)

console.log("TESTE PARA FINDBYID")
register.findById(cover)
console.log(cover)
console.log(register.findById(cover))

console.log("TESTE PARA UPDATEBYID")
register.updateById(cover,"abobrinha")
console.log(register)

console.log("TESTE PARA DELETEBYID")
register.deleteById(cover)
console.log(register)

console.log("TESTE PARA ADDMANY")
register.addMany(["batatinha", "batatão", "batatona", "batatada"])
console.log(register)


class Database {
    constructor(){
        this.registers = {}
    }

    createRegister(name){
        if(!this.registers[name]) this.registers[name] = new Register()
        return this.registers
    }

    addRegister(name, register){
        if(!this.registers[name] && register instanceof Register) this.registers[name] = register
        return this.registers
    }


    get length(){
        return Object.keys(this.registers).length
    }
    
    save(filename){
        return fs.writeFileSync(`${filename}.tet`,JSON.stringify(this.registers))
    }

    load(filename){
        this.registers = JSON.parse(fs.readFileSync(`${filename}.tet`,'utf-8'))
        return this.registers
    }

}

const database = new Database()
console.log(database) // { Database: { registers: {} }}
console.log("TESTE CREATEREGISTER")
database.createRegister("Hiro")
console.log(database)
console.log("TESTE ADDREGISTER")
database.addRegister("Tet", register)
console.log(database)
console.log("TESTE LENGTH")
console.log(database.length)
database.save("Save")
console.log(database.load("Save"))

// Ignorar a linha abaixo
export {Database, Register}