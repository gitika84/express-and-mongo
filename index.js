const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const productRoutes = require('./routes/productRoute')
const app = express()


app.use(express.json())
dotenv.config()
const port = process.env.PORT

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', productRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})