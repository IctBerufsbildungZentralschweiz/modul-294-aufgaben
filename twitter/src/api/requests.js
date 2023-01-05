import stream from './_stream.json'
import { useAuth } from './auth'

const backend = 'http://modul-294-backend.lndo.site/twitter'

const {token, setToken} = useAuth()

async function request (url, options = {}) {
    const headers = {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    }

    if (token.value) {
        headers['Authorization'] = 'Bearer ' + token.value
    }

    const response = await fetch(backend + url, {headers, ...options})

    if (response.ok) {
        return response.json()
    } else if (response.status === 422) {
        const data = await response.json()

        throw new ValidationError('validation failed', data.errors)
    } else {
        throw new Error(`Server error: ${await response.text()}`)
    }
}

// Lädt alle Tweets vom Backend.
export async function fetchStream () {
    const response = await request('/tweets')

    return response.data;
}

// Daten erstellen
export async function createTweet (text) {
    const response = await request('/tweets', {
        method: 'POST',
        body: JSON.stringify({text}),
    })

    return response.data;
}

// Lädt aktivste User.
export async function fetchTopUsers () {
    const response = await request('/users/top')

    return response.data;
}

// Lädt neuste User.
export async function fetchNewUsers () {
    const response = await request('/users/new')

    return response.data;
}

// Sendet das Login-Formular ans backend.
export async function loginUser (email, password) {
    const response = await request(`/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
    })

    if (response.token) {
        setToken(response.token)
    }

    return response.token
}


// Überprüft, ob das Session-Token gültig ist.
export async function checkAuth () {
    try {
        const response = await request(`/auth`, {
            method: 'GET',
        })

        if (response.token) {
            setToken(response.token)
        }

        return {
            user: response.user,
            token,
        }
    } catch (error) {
        setToken('')
        return false
    }
}

class ValidationError {
    message
    errors

    constructor (message, errors) {
        this.message = message
        this.errors = errors
    }
}