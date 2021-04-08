const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 9000
const path = require('path')

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build'))) //tells it what to load

app.use('/api/', (_, res) => {
  res.json({ data: 'API is accounted for' })
})

app.listen(port, () => {
  console.log(`Server is alive on port ${port}`)
})

// console.log('it works!')
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USER) //only for mac users
// console.log(process.env.GREET)
