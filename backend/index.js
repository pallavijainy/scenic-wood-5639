const express = require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { userRouter } = require("./Routes/UserRoutes")
const { ProductRouter } = require("./Routes/ProductRoutes")
const { Authenticate } = require("./middleware/Auth.middleware")
const { OrderRouter } = require("./Routes/OrderRoutes")
const { cartRouter } = require("./Routes/CartRoutes")

const app = express()
app.use(express.json())

app.use(cors())


app.use("/user",userRouter)
app.use("/product" , ProductRouter)
app.use("/cart" , cartRouter)

app.use("/order" , OrderRouter)



app.listen(8080 , async()=>{
try {
    await connection;
    console.log("Connected to db")
} catch (error) {
    console.log({"msg":"something went wrong" , error:error.message})
};

console.log("listening to the port 8080")
})