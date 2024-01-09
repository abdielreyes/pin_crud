import express from "express"
import api from "./api.js"

const app = express()
const PORT = 8080

app.use(express.json());
app.use("/", api)


app.listen(PORT, () => {
    console.log("Server listening in " + PORT)
})