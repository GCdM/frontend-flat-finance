const baseURL = "http://localhost:3000/api/v1"

const createUser = (username, password) => {
  return fetch(baseURL + `/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  }).then( resp => resp.json() )
}

const loginUser = (username, password) => {
  return fetch(baseURL + `/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  }).then( resp => resp.json() )
}

const getCurrentUser = (token) => {
  return fetch(baseURL + `/current_user`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  }).then( resp => resp.json() )
}

const getHouseholdBy = (id) => {
  return fetch(baseURL + `/households/${id}`)
    .then( resp => resp.json() )
}

export {
  createUser,
  loginUser,
  getCurrentUser,
  getHouseholdBy,
}
