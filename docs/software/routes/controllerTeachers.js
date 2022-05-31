const Teachers = require("../models/teachers")
const { findIndex, last, isUndefined } = require("lodash")
const { v4 } = require("uuid")

let _read = options => ( options && !isUndefined( options.id ) ) ? Teachers.filter(t => t.id == options.id)[0] : Teachers

let _update = options  => {
  let result 
  let index = findIndex( Teachers, t => t.id == options.id )
  if ( index >= 0 ) {
    Teachers[index] = options
    result = Teachers[index]
  }

  return result
}

let _create = options => {
  options.id = v4()
  Teachers.push( options )
  return last( Teachers )
}

let _delete = options => {
  let result 
  let index = findIndex( Teachers, t => t.id == options.id )
  if ( index >= 0 ) {
    result = Teachers.splice( index, 1 )
  }
  return result
}

module.exports = {
  create: _create,
  read: _read,
  update: _update,
  delete: _delete
} 