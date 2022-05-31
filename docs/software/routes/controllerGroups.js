const Groups = require("../models/groups")
const { findIndex, last, isUndefined } = require("lodash")
const { v4 } = require("uuid")

let _read = options => ( options && !isUndefined( options.id ) ) ? Groups.filter(g => g.id == options.id)[0] : Groups

let _update = options  => {
  let result 
  let index = findIndex( Groups, g => g.id == options.id )
  if ( index >= 0 ) {
    Groups[index] = options
    result = Groups[index]
  }

  return result
}

let _create = options => {
  options.id = v4()
  Groups.push( options )
  return last( Groups )
}

let _delete = options => {
  let result 
  let index = findIndex( Groups, g => g.id == options.id )
  if ( index >= 0 ) {
    result = Groups.splice( index, 1 )
  }
  return result
}

module.exports = {
  create: _create,
  read: _read,
  update: _update,
  delete: _delete
} 