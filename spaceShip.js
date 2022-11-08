// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class spaceShip {
    constructor(name, topSpeed) {
        this.name = name;
        this.topSpeed = topSpeed
    }
    accelerate() {
        return `${this.name} moving to ${this.topSpeed}`

    }
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const sputnik1 = new spaceShip('Spuntik 1', 123000)
const horizon = new spaceShip('Horizon', 45600)

console.log(sputnik1.accelerate())
console.log(horizon.accelerate())
