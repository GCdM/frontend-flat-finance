const baseURL = "http://localhost:3000/api/v1/"

const getHouseholdBy = (id) => {
  return fetch(baseURL + `households/${id}`)
    .then( resp => resp.json() )
}

export {
  getHouseholdBy,
}
