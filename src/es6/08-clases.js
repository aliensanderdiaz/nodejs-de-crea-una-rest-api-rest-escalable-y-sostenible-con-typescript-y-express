// declarando
class User {}
// instancia de una clase
const newUser = new User()

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

class User {
    // methods
    greeting() {
        return 'Hello'
    }
}

const gndx = new User()
console.log(gndx.greeting())

const bebeloper = new User()
console.log(bebeloper.greeting())

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

class User {
    // Constructor
    constructor() {
        console.log('Nuevo Usuario')
    }

    greeting() {
        return 'Hello'
    }
}

const alex = new User()
console.log(alex.greeting())

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

// this
class User {
    constructor(name) {
        this.name = name
    }

    speak() {
        return 'Hello'
    }

    greeting() {
        return `${ this.speak() } ${ this.name }`
    }
}

const alien = new User('aliensander')
console.log(alien.greeting())

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

// setters and getters

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    speak() {
        return 'Hello'
    }

    greeting() {
        return `${ this.speak() } ${ this.name }`
    }

    get uAge() {
        return this.age
    }

    set uAge(n) {
        this.age = n
    }
}

const juan = new User('Juan', 32)

console.log(juan.uAge)
juan.uAge = 20
console.log(juan.uAge)