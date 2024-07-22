const redux = require("redux");
console.log(redux);

const initialState = {
  counter: 0,
  users: [{
    id: 5,
    name: "Qwerty",
    age: 44,
    gender: "male"
  }, ],
  purchases: {
    "itemA": 3,
  },
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.newUser]
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    case 'CHANGE_NAME':
      return {
        ...state,
        users: state.users.map(user => user.id === action.id ? {
          ...user,
          name: action.name
        } : user)
      }
    case 'CHANGE_GENDER':
      return {
        ...state,
        users: state.users.map(user => user.id === action.id ? {
          ...user,
          gender: user.gender === 'male'?'female':'male'
        } : user)
      }
    case 'INCREMENT_AGE':
      return {
        ...state,
        users: state.users.map(user => user.id === action.id ? {
          ...user,
          age: user.age + 1
        } : user)
      }
    case 'INCREMENT_ALL_USERS_AGE':
      return {
        ...state,
        users: state.users.map(user => ({...user, age: user.age + 1}))
      }
    case 'ADD_PURCHASE': 
      if(Object.hasOwn(state.purchases, [action.item])) {
        return {
          ...state,
        purchases: {...state.purchases, [action.item]:state.purchases[action.item] + 1}
        }
      } else return {
        ...state,
        purchases:{...state.purchases, [action.item]:1}
        }
    case 'REMOVE_PURCHASE': {
      const copystate = {...state}
      delete copystate.purchases[action.item]
      return copystate
    } 
    case 'DECSREASE_PURCHACD_COUNT':
      if(Object.hasOwn(state.purchases, [action.item])) {
        return {
          ...state,
        purchases: {...state.purchases, [action.item]:state.purchases[action.item] - 1}
        }
      } else return {
        ...state,
        }
    case 'RESET':
      let copystate = {...state}
      copystate = {
        counter:0,
        users:[],
        purchases:{}
      }
      return copystate
    
    default:
      return state
  }
}


// INCREMENT_COUNTER
// DECREMENT_COUNTER
// ADD_USER
// REMOVE_USER
// CHANGE_NAME
// CHANGE_GENDER
// INCREMENT_AGE
// INCREMENT_ALL_USERS_AGE
// ADD_PURCHASE               // {item: "itemA"}
// REMOVE_PURCHASE            // {item: "itemA"}
// DECSREASE_PURCHACD_COUNT   // {item: "itemA"}
// RESET

const store = redux.createStore(reducer, initialState);

// store.dispatch({type:'INCREMENT_COUNTER'})
// store.dispatch({type:'DECREMENT_COUNTER'})
// store.dispatch({type:'DECREMENT_COUNTER'})
store.dispatch({
  type: 'ADD_USER',
  newUser: {
    id: 6,
    name: "Qwerty_2",
    age: 44,
    gender: "male"
  }
})
// store.dispatch({
//   type: 'REMOVE_USER',
//   id: 5
// })
store.dispatch({
  type: 'CHANGE_NAME',
  id: 6,
  name: 'Alexa'
})
store.dispatch({
  type: 'CHANGE_GENDER',
  id:6,
})
store.dispatch({
  type: 'INCREMENT_AGE',
  id:6,
})
store.dispatch({
  type: 'INCREMENT_ALL_USERS_AGE',
})
store.dispatch({
  type: 'ADD_PURCHASE',
  item: "itemA",
})
store.dispatch({
  type: 'ADD_PURCHASE',
  item: "itemB",
})
store.dispatch({
  type: 'ADD_PURCHASE',
  item: "itemC",
})
store.dispatch({
  type: 'REMOVE_PURCHASE',
  item: "itemB",
})
store.dispatch({
  type: 'DECSREASE_PURCHACD_COUNT',
  item: "itemC",
})
// store.dispatch({
//   type: 'RESET',
// })



// store.dispatch({type:'DECREMENT_COUNTER'})
console.log(store.getState());