import React from 'react'
import {connect} from 'react-redux'
import {createNewAnecdote} from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationsReducer'

function AnecdoteForm(props) {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        // const newAnecdote = await anecdoteServices.createNew(content)
        props.createNewAnecdote(content)
        props.setNotification(`new anecdote created`, 5)
    } 

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={handleSubmit}>
                <div><input name="anecdote" /></div>
                <button>create</button>
            </form>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        createNewAnecdote: content => dispatch(createNewAnecdote(content)),
        setNotification: (msg, duration) => dispatch(setNotification(msg, duration))
    }
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)
