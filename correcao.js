import { Database, Register } from './index.js'
import fs from 'fs'

console.log('============================')
console.log('💡 Initializing tests...')
console.log('============================')

const assert = async (testMessage, callback) => {
  console.log('⚙️  Running test:', testMessage)
  callback().then(() => {
    console.log('✅ Test passed:', testMessage)
  }).catch(err => {
    console.log('❌ Test failed:', testMessage)
    console.log(err)
  })
}

let registerInstance
let databaseInstance

console.log('============================')
console.log('💡 Scheduling Class declarations tests...')
console.log('============================')

assert('Register should instantiate', async () => {
  registerInstance = new Register()
  if(registerInstance instanceof Register) {
    return true
  }
  throw new Error('registerInstance is not an instance of Register')
})

assert('Database should instantiate', async () => {
  databaseInstance = new Database()
  if(databaseInstance instanceof Database) {
    return true
  }
  throw new Error('databaseInstance is not an instance of Register')
})

let registerMethods = ['add', 'findById', 'updateById', 'deleteById', 'addMany']
let databaseMethods = ['createRegister', 'addRegister', 'save']

registerMethods.forEach(method => {
  registerInstance = new Register()
  assert(`Register should have method ${method}`, async () => {
    if(registerInstance[method]) {
      return true
    }
    throw new Error(`registerInstance does not have method ${method}`)
  })
})

databaseMethods.forEach(method => {
  databaseInstance = new Database()
  assert(`Database should have method ${method}`, async () => {
    if(databaseInstance[method]) {
      return true
    }
    throw new Error(`databaseInstance does not have method ${method}`)
  })
})

console.log('============================')
console.log('💡 Scheduling Register methods tests...')
console.log('============================')

assert('Register.add method should add item to this.data', async () => {
  registerInstance = new Register()
  registerInstance.add('Some data')
  if(Object.keys(registerInstance.data).length === 1) {
    return true
  }
  throw new Error('add method did not add item to this.data')
})

assert('Register.add method should add unique id to data key', async () => {
  registerInstance = new Register()
  registerInstance.add('First data')
  registerInstance.add('Second data')
  let dataKeys = Object.keys(registerInstance.data)
  if(dataKeys.length === 2 && dataKeys[0] !== dataKeys[1]) {
    return true
  }
  throw new Error('add method did not add unique id to data key')
})

assert('Register.length prop should return this.data length', async () => {
  registerInstance = new Register()
  registerInstance.add('First data')
  registerInstance.add('Second data')

  if (registerInstance.length === 2) {
    return true
  }
  throw new Error('length prop did not return this.data length')
})

assert('Register.findById should find the key with the id and return its value', async () => {
  registerInstance = new Register()
  registerInstance.add('First data')
  registerInstance.add('Second data')
  let id = Object.keys(registerInstance.data)[0]
  if(registerInstance.findById(id) === 'First data') {
    return true
  }
  throw new Error('findById method did not find the key with the id and return its value')
})

assert('Register.updateById should find the key with the id, update its value and return this.data', async () => {
  registerInstance = new Register()
  registerInstance.add('First data')
  registerInstance.add('Second data')
  let id = Object.keys(registerInstance.data)[0]
  let result = registerInstance.updateById(id, 'Updated data')
  if(registerInstance.findById(id) === 'Updated data' 
    && result === registerInstance.data) {
    return true
  }
  throw new Error('updateById method did not find the key with the id, update its value and return this.data')
})

assert('Register.deleteById should find the key with the id, delete its value and return this.data', async () => {
  registerInstance = new Register()
  registerInstance.add('First data')
  registerInstance.add('Second data')
  let id = Object.keys(registerInstance.data)[0]
  let result = registerInstance.deleteById(id)
  if(!registerInstance.findById(id) 
    && result === registerInstance.data) {
    return true
  }
  throw new Error('deleteById method did not find the key with the id, delete its value and return this.data')
})

assert('Register.addMany method should add data from array and return this.data', async () => {
  registerInstance = new Register()
  let dataToBeAdded = ['First data', 'Second data']
  let result = registerInstance.addMany(dataToBeAdded)
  let id1 = Object.keys(registerInstance.data)[0]
  let id2 = Object.keys(registerInstance.data)[1]
  if(registerInstance.findById(id1) === 'First data'
    && registerInstance.findById(id2) === 'Second data'
    && result === registerInstance.data) {
    return true
  }
  throw new Error('deleteById method did not find the key with the id, delete its value and return this.data')
})


console.log('============================')
console.log('💡 Scheduling Database methods tests...')
console.log('============================')

assert('Database.createRegister should create a Register instance and add it to this.registers', async () => {
  databaseInstance = new Database()
  databaseInstance.createRegister('register1')
  databaseInstance.createRegister('register2')
  let result = databaseInstance.createRegister('register1')
  if(databaseInstance.registers.register1 instanceof Register &&
    Object.keys(databaseInstance.registers).length === 2 &&
    result === databaseInstance.registers) {
    return true
  }
  throw new Error('createRegister method did not create a Register instance and add it to this.registers')
})

assert('Database.addRegister should add an external Register instance to this.registers', async () => {
  databaseInstance = new Database()
  registerInstance = new Register()
  databaseInstance.addRegister('register1', registerInstance)
  databaseInstance.addRegister('register2', 'foo')
  let result = databaseInstance.addRegister('register1', registerInstance)
  if(databaseInstance.registers.register1 instanceof Register &&
    Object.keys(databaseInstance.registers).length === 1 &&
    result === databaseInstance.registers) {
    return true
  }
  throw new Error('addRegister method did not add an external Register instance to this.registers')
})

assert('Database.length prop should return this.registers length', async () => {
  databaseInstance = new Database()
  databaseInstance.createRegister('register1')
  databaseInstance.createRegister('register2')

  if (databaseInstance.length === 2) {
    return true
  }
  throw new Error('length prop did not return this.registers length')
})

assert('Database.save method should create a file with this.registers data', async () => {
  databaseInstance = new Database()
  databaseInstance.createRegister('register1')
  databaseInstance.createRegister('register2')
  databaseInstance.save('testing')

  let result = fs.readFileSync('testing.tet', 'utf8')

  if (result === JSON.stringify(databaseInstance.registers)) {
    fs.unlinkSync('testing.tet')
    return true
  }
  throw new Error('save method did not create a file with this.registers data')
})

assert('Database.load method should load a file and update this.registers data', async () => {
  databaseInstance = new Database()
  databaseInstance.createRegister('register1')
  databaseInstance.createRegister('register2')
  databaseInstance.save('testing')
  databaseInstance = new Database()
  databaseInstance.load('testing')
  console.log(databaseInstance.registers.register1)
  if (databaseInstance.registers.register1 &&
    databaseInstance.registers.register2 &&
    Object.keys(databaseInstance.registers).length === 2) {
    fs.unlinkSync('testing.tet')
    return true
  }
  throw new Error('load method did not load a file and update this.registers data')
})

console.log('============================')
console.log('💡 Displaying test results...')
console.log('============================')