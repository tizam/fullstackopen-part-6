import anecdoteServices from '../services/anecdoteServices'


const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data

    case 'VOTE':
      const anecdote = state.find(an => an.id === action.data.id)
      const changedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
      }      

      return state.map(an => an.id !== action.data.id ? an : changedAnecdote)

    case 'ADD':
      return [...state, action.data]
      
  
    default:
      return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteServices.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const incrementVote = (anecdote) => {
  return async dispatch => {
    const data = await anecdoteServices.updateVote(anecdote)
    dispatch({
      type: 'VOTE',
      data
    })
  }
}

export const createNewAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteServices.createNew(content)
    dispatch({
      type: 'ADD',
      data: newAnecdote
    })
  }
}

export default reducer