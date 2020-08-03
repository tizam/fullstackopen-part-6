import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (anecdote) => {
    const obj = {content: anecdote, votes: 0}
    const response = await axios.post(baseUrl, obj)
    return response.data
}

const updateVote = async (newObj) => {
    const obj = {...newObj, votes: newObj.votes + 1}
    const response = await axios.put(`${baseUrl}/${newObj.id}`, obj)
    return response.data
}

export default {
    getAll,
    createNew,
    updateVote
}