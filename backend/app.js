const express = require("express")
const cors = require("cors")



const { Router } = require("./Routes")
const { connectDb } = require("./Config/connectDB")


const app = express()


app.use(cors())

app.use(express.json({ limit: "20mb" }))
app.use(express.urlencoded({ extended: false }))

app.get("/",(req,res)=>{
    res.send("Rafik El Hariri University Final Year Project Group")
})
Router(app)


connectDb(() => {
    // httpServer.listen(3500)
    // httpsServer.listen(port, "0.0.0.0")
    app.listen(3000, "0.0.0.0", () => {
        console.log(`Listening on port ${3000}`)
    })
})