import connectDb from "./db/index.js";
import 'dotenv/config'


connectDb()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server started at port ${process.env.PORT||8000}`)
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed!!",err)
})