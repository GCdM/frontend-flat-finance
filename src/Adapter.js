const baseURL = "http://localhost:3000/api/v1"

//USERS
const createUser = (username, password) => {
  return fetch(baseURL + `/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username,
        password
      }
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
      user: {
        username,
        password
      }
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

//HOUSEHOLDS
const createHousehold = (name) => {
  return fetch(baseURL + `/households`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      household: { name }
    })
  }).then( resp => resp.json() )
}

const getHouseholdBy = (id) => {
  return fetch(baseURL + `/households/${id}`)
    .then( resp => resp.json() )
}

const addUserToHousehold = (userId, householdId) => {
  return fetch(baseURL + `/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: { household_id: householdId }
    })
  }).then( resp => resp.json() )
}

//EXPENSES
const createExpense = (expenseData) => {
  return fetch(baseURL + `/expenses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      expense: expenseData
    })
  }).then( resp => resp.json() )
}

const getExpensesBy = (householdId) => {
  return fetch(baseURL + `/households/${householdId}/expenses`)
    .then( resp => resp.json() )
}

const getExpensePaymentsBy = (expenseId) => {
  return fetch(baseURL + `/expenses/${expenseId}/payments`)
    .then( resp => resp.json() )
}

//PAYMENTS
const getPaymentsBy = (householdId) => {
  return fetch(baseURL + `/households/${householdId}/payments`)
    .then( resp => resp.json() )
}

export {
  createUser,
  loginUser,
  getCurrentUser,
  createHousehold,
  getHouseholdBy,
  addUserToHousehold,
  createExpense,
  getExpensesBy,
  getExpensePaymentsBy,
  getPaymentsBy,
}
