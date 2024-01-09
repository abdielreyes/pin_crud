import db from "./db.js"
export const createPin = (password) => {
    return db.set(password, password)

}
export const getPins = () => {
    const res = db.getAll()
    console.log(res)
    return res
}
export const deletePin = (password) => {
    db.delete(password)
}
export const validatePin = (password) => {
    const pass = db.has(password)
    if (pass) {
        return true
    }
    return false
}
export const deleteDb = () => {
    return db.deleteAll()
}