const baseURL = "http://localhost:3000/api/v1"

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

const getHouseholdBy = (id) => {
  return fetch(baseURL + `/households/${id}`)
    .then( resp => resp.json() )
}

const getExpensesBy = (householdId) => {
  return fetch(baseURL + `/households/${householdId}/expenses`)
    .then( resp => resp.json() )
}

const getPaymentsBy = (householdId) => {
  return fetch(baseURL + `/households/${householdId}/payments`)
    .then( resp => resp.json() )
}

const postPaymentBy = (id) => {
  return fetch(baseURL + `/payments/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id
    })
  })
    .then( resp => resp.json() )
}

const getExpensePaymentsBy = (expenseId) => {
  return fetch(baseURL + `/expenses/${expenseId}/payments`)
    .then( resp => resp.json() )

}

const createExpense = (info) => {

}

export {
  createUser,
  loginUser,
  getCurrentUser,
  getHouseholdBy,
  getExpensesBy,
  getExpensePaymentsBy,
  getPaymentsBy,
  createExpense,
  postPaymentBy,

}
