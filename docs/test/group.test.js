const server = require("../server")
const axios = require("axios")

const endpoint = "http://localhost:8080/api/groups"

afterAll( () => server.close())


describe("read entities", () => {
  
  test("read complete collection without options", () => axios.get(endpoint)
    .then( resp => expect(resp.data.length).toBe(6) )
  )

  test("read complete collection without id", () => axios.get(`${endpoint}?dummy=1`)
    .then( resp => expect(resp.data.length).toBe(6))
  )

  test("read one entity by id from params", () => axios.get(`${endpoint}/1`)
    .then( resp => expect(resp.data.name).toBe("IV91"))
  )

  test("read one entity by id from query", () => axios.get(`${endpoint}?id=1`)
    .then( resp => expect(resp.data.name).toBe("IV91"))
  )

  test("read empty by unresolved id", () => axios.get(`${endpoint}?id=1`)
    .then( resp => expect(resp.data.length).toBeUndefined())
  )

})  

describe("test CRUD", () => {
  let entityId
  test("create, update, delete workflow", () => axios.post(endpoint,{
      name:"IP91"
    })
    .then( resp => {
      entityId = resp.data.id
      expect(resp.data.name).toBe("IP91")
      return axios.get(endpoint)
    })
    .then( resp => {
      expect(resp.data.length).toBe(7)
      return axios.put(`${endpoint}?id=${entityId}`, {
        name:"IP91"
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
    .then( resp => expect(resp.data.length).toBe(6))
  )
})