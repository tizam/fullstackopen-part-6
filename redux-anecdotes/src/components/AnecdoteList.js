import React from 'react'
import { connect } from 'react-redux'
import { incrementVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationsReducer'

function AnecdoteList(props) {

    const vote = (anecdote) => {
        console.log('vote', anecdote.id)
        props.incrementVote(anecdote)
        props.setNotification(`you voted '${anecdote.content}'`, 5)
    }
    return (
        <>
          {props.anecdotes
            .filter(anecdote => anecdote.content.toLowerCase().includes(props.filter))
            .sort((a, b) => a.votes < b.votes ? 1 : -1)
            .map(anecdote =>
              <div key={anecdote.id}>
                <div>
                  {anecdote.content}
                </div>
                <div>
                  has {anecdote.votes} {' '}
                  <button onClick={() => vote(anecdote)}>vote</button>
                </div>
                <hr />
              </div>
            )}
        </>
    )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    anecdotes: state.anecdotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementVote: anecdote => dispatch(incrementVote(anecdote)),
    setNotification: (msg, duration) => dispatch(setNotification(msg, duration))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
