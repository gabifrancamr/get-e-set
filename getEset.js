/*class TransportSpaceship {
    constructor(name){
        this.name = name
        this.currentVelocity = 0
    }

    set velocity(newVelocity){
        if(newVelocity > 120){
            this.currentVelocity = 120
        } else {
            this.currentVelocity = newVelocity
        }
    }
}

let spaceship = new TransportSpaceship("Transportador")

spaceship.velocity = 130

console.log(spaceship)*/

class ResourceProcessStation {
    constructor(nome, mes){
        this.nome = nome
        this.mes = mes
    }

    get semana(){
        return this.mes / 4
    }
}

let resourceProcessor = new ResourceProcessStation("Gaia", 500)

console.log(resourceProcessor.semana)

resourceProcessor.mes = 600 

console.log(resourceProcessor.semana)
