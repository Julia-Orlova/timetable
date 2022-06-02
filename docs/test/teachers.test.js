// import the server variable from our server
const server = require("../server")
// import axios
const axios = require("axios")

// determine the link to the end point of our service and start testing
const endpoint = "http://localhost:8080/api/teachers"

// use afterAll to determine the handler that will run after all the tests
afterAll( () => server.close())

// define a test to check data reading (read entities)
describe("read entities", () => {
  
  /* with axios make a GET request at http://localhost:8080/api/groups (axios.get returns promise)
  * Define a then handler for this promise, which is activated when the promise is triggered (axios.get returns the query result). 
  * The handler then also returns a promise. In this handler, use expect (testedValue>).toBe (<expectedValue>) to verify that 
  * the length of the collection is 5. That is, we read the entire data collection.
  */
  test("read complete collection without options", () => axios.get(endpoint)
    .then( resp => expect(resp.data.length).toBe(5) )
  )

  test("read complete collection without id", () => axios.get(`${endpoint}?dummy=1`)
    .then( resp => expect(resp.data.length).toBe(5))
  )

  /* with axios make a GET request at http://localhost:8080/api/groups (axios.get returns promise)
  * Define a then handler for this promise, which is activated when the promise is triggered (axios.get returns the query result). 
  * The handler then also returns a promise. In this handler, use expect (testedValue>).toBe (<expectedValue>) to verify that 
  * the name of the collection is "Ivanov Ivan Ivanovich". That is, we read an instance of the collection with the name "Ivanov Ivan Ivanovich".
  */
  test("read one entity by id from params", () => axios.get(`${endpoint}/1`)
    .then( resp => expect(resp.data.name).toBe("Ivanov Ivan Ivanovich"))
  )

  test("read one entity by id from query", () => axios.get(`${endpoint}?id=1`)
    .then( resp => expect(resp.data.name).toBe("Ivanov Ivan Ivanovich"))
  )

  test("read empty by unresolved id", () => axios.get(`${endpoint}?id=1`)
    .then( resp => expect(resp.data.length).toBeUndefined())
  )

})  

// define a test to test the CRUD-interface in the workflow (CRUD test)

/* A new copy of the data is being created. Its unique identifier is stored in the entityId variable, which is used to 
* verify the results of other operations.
* The whole collection is read, its length is checked.
* The data instance is being updated.
* It is read and checked.
* The data instance is deleted.
* The whole collection is read again and its length is checked.
*/
describe("test CRUD", () => {
  let entityId
  test("create, update, delete workflow", () => axios.post(endpoint,{
      name:"Semenov Semen Semenovich"
    })
    .then( resp => {
      entityId = resp.data.id
      expect(resp.data.name).toBe("Semenov Semen Semenovich")
      return axios.get(endpoint)
    })
    .then( resp => {
      expect(resp.data.length).toBe(6)
      return axios.put(`${endpoint}?id=${entityId}`, {
        name:"Semenov Semen Semenovich"
        })
    })
    .then( resp => {
      expect(resp.data.id).toBe(entityId)
      return axios.delete(`${endpoint}?id=${entityId}`)
    })
    .then( resp => {
      expect(entityId).toBe(entityId)
      return axios.get(endpoint)
    })
    .then( resp => expect(resp.data.length).toBe(5))
  )

})
