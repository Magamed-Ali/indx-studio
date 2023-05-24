import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://testguru.ru/frontend-test/api/v1/items'
})

// api
export const todolistsAPI = {
    getTodolists(pageCount: number = 1) {
        return instance.get(   `?page=${pageCount}`)
    }
}

