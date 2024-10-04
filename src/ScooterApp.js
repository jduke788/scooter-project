// require the User and Scooter classes - see where they can be used in ScooterApp.js
const Scooter = require('./Scooter.js')
const User = require('./User.js')
class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.stations = {
      stationA: [],
      stationB: [],
      stationC: [],
    }
    this.registerUsers = {}
  }
  registerUser(username, password, age) {
    if(this.registerUsers[username]) {
      throw new Error('already registered')
    }
    if (age < 18 ) {
      throw new Error('too young to register')
    }
    const newUser = new User(username, password, age)
    this.registerUsers[username] = newUser
    console.log('user has been registered')
    return newUser
  }
  loginUser(username, password) {
    const user = this.registerUsers[username]
    if(!user) {
      throw new Error('Username or password is incorrect')
    }
    try {
      user.login(password)
      console.log('user has been logged in')
      return user
    } catch (error) {
      throw new Error('Username or password is incorrect')
    }
  }
    logoutUser(username) {
      const user = this.registerUsers[username]
      if(!user) {
        throw new Error('User not found') 
      } 
      user.logout()
      return user
    }

    createScooter(station) {
      if(!this.stations[station]) {
        throw new Error('no such station')
      }
      const newScooter = new Scooter(station)
      this.stations[station].push(newScooter)
      console.log('created new scooter')
      return newScooter
    } 

    dockScooter(scooter, station) {
      if(!this.stations[station]) {
        throw new Error('no such station')
    }
    if(scooter.station === station) {
      throw new Error('scooter already at station')
    }
    scooter.dock(station)
    this.stations[station].push(scooter)
    console.log('scooter is docked')
  }

  rentScooter(scooter, user) {
    if(scooter.user !== null) {
      throw new Error('scooter already rented')
    }
    let stationName
    for (const [station, scooters] of Object.entries(this.stations)) {
      const index = scooters.indexOf(scooter)
      if(index > -1) {
        stationName =   station
        scooters.splice(index, 1)
        break
      }
    }
    if(!stationName) {
      throw new Error('scooter not found at any station')
    }
    scooter.rent(user)
    console.log('scooter is rented')
    return scooter
  }
  print() {
    
  }


}

User.use
module.exports = ScooterApp
