import { STORAGE_KEY } from './mutations'

const localStoragePlugin = (store) => {
    console.log('====localStoragePlugin=====')
    // store.subscribe((mutation, state) => {
    store.subscribe((mutation, { todos }) => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    })
}
// plugins
export default process.env.NODE_ENV !== 'production'
    ? [localStoragePlugin]
    : [localStoragePlugin]
