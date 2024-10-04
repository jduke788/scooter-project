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
      
    }
  }



User.use
module.exports = ScooterApp
