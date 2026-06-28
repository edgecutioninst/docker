import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors(
    {
        origin:[
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:3000",
            //and production URL
        ],
        credentials: true,
    }
))

//API Route

app.get("/api/message",(req,res)=>{
    res.json({message:"Hello from server"})
})

const PORT = 4000

// 0.0.0.0: Listen on all network interfaces
app.listen(PORT, "0.0.0.0", ()=>{
    console.log(`🌋 Server running on port http://localhost:${PORT}`)
})
