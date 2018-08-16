import React from 'react'

const baseURL = "http://localhost:3000/api/v1/"

const getHousehold = (id) => {
  return fetch(baseURL + `households/${id}`)
    .then( resp => resp.json() )
}

export {
  getHousehold,
}
