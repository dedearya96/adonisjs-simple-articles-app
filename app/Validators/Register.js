'use strict'

class Register {
  get rules () {
    return {
      name: 'required',
      email: 'required|email|unique:users',
      password: 'required|min:8'
    }
  }

  get messages(){
    return{
      'name.required': 'Username is required',
      'email.required': 'Email is required',
      'email.unique': 'Email already exists',
      'password.required':'Password is required',
      'password.min':'Password should be at least 8 characters'
    }
  }
}

module.exports = Register
