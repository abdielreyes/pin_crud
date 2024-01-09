import express from "express"
import { createPin, getPins, validatePin, deletePin } from "./controller.js"
const router = express.Router()

router.get("/", (req, res) => {
    res.json("Hello World")
})
router.get("/get_pins", (req, res) => {
    const passwordsArray = getPins()
    const passwords = []
    passwordsArray.forEach(e => {
        passwords.push(e.value)
    })
    res.json(passwords)
})
router.get("/create_pin", (req, res) => {
    const { user, password } = req.query
    if (password) {
        createPin(password, user)
        res.json("PIN creado")
    }

})
router.get("/delete_pin", (req, res) => {
    const { password } = req.query
    if (password) {
        deletePin(password)
        return res.send("PIN eliminado")

    }
    return res.send("Error")
})
router.get("/validate_pin", (req, res) => {
    const { password } = req.query
    if (password) {
        if (validatePin(password)) {
            return res.send(true)
        }
    }
    return res.send(false)
})




export default router
