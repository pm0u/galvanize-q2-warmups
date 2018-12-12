//Create an electric car that can go 100 miles per charge.
//You’ll need to charge the car to go anywhere.
//When you drive the miles you have left should go down.
//When your miles left are gone you’ll need to charge the car again.


class electricCar {
  constructor() {
    this._miles = 100
  }

  drive(distance) {
    if (distance <= this._miles) {
      this._miles -= distance
      console.log(`You drove ${distance} miles, you have ${this._miles} left`)
      if (this._miles === 0) {
        console.log(`You will need to charge your car to drive it again!`)
      }
    } else if (this._miles !== 0) {
      const driven = this._miles
      this._miles = 0
      console.log(`You tried to drive ${distance} miles, but only made it ${driven} miles and your car died! Hope you brought a charger!`)
      if (this._miles === 0) {
        console.log(`You will need to charge your car to drive it again!`)
      }
    } else {
      console.log(`You're car is dead! charge it!`)
    }
  }

  charge() {
    this._miles = 100
    console.log(`You charged your electric car and now have ${this._miles} miles left`)
  }
}


let dumbTesla = new electricCar()

dumbTesla.drive(20)
dumbTesla.drive(30)
dumbTesla.charge()
dumbTesla.drive(100)
dumbTesla.charge()
dumbTesla.drive(120)
dumbTesla.drive(1)
