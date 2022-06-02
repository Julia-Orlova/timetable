// controller that implements the CRUD interface (Create, Read, Update, Delete) for model ./models/groups.js

// import Groups model
const Groups = require("../models/groups")
// import necessary funds from lodash and uuid libraries
const { findIndex, last, isUndefined } = require("lodash")
const { v4 } = require("uuid")

/* the _read read function takes the optional options parameter, which contains information about 
* the instance of the model to be read. When options are specified and contain an id field, the _read function 
* returns an instance with the requested id. If an instance with this id is missing, the function will return 
* undefined. If the options option is missing or the id field is not defined, the function will return the entire collection.
*/
let _read = options => ( options && !isUndefined( options.id ) ) ? Groups.filter(g => g.id == options.id)[0] : Groups

/* The _update update function accepts the options parameter, which contains information about the instance of the model to be updated. 
let _update = options  => {
  let result 
  /* using the findIndex function, we search for the index of the instance that needs to be updated. If such an instance 
  * is found (findIndex returns a value equal to or greater than 0), then the data from options is overwritten in the found 
  * instance and returned from the function. If no instance is found, the function returns undefined.
  */
  let index = findIndex( Groups, g => g.id == options.id )
  if ( index >= 0 ) {
    Groups[index] = options
    result = Groups[index]
  }

  return result
}

/* the new _create instance creates an options parameter that contains information about the instance of the model 
* you want to create. Use the v4 () function to create a unique instance ID and add a new instance to the end of the collection. 
* The function returns the created instance of the model.
*/
let _create = options => {
  options.id = v4()
  Groups.push( options )
  return last( Groups )
}

/* The _delete instance delete function accepts the options parameter, which contains information about the instance 
* of the model to be deleted. using findIndex we search for the index of the instance that needs to be deleted. 
* If an instance is found, delete it using the splice array method. The function returns a deleted instance.
*/
let _delete = options => {
  let result 
  let index = findIndex( Groups, g => g.id == options.id )
  if ( index >= 0 ) {
    result = Groups.splice( index, 1 )
  }
  return result
}

// the module exports a controller object that contains the create, read, update and delete methods
module.exports = {
  create: _create,
  read: _read,
  update: _update,
  delete: _delete
} 
