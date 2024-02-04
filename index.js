const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

// Middleware
app.use(express.json())

// Allowing CORS
app.use(cors("*"))

app.get('/', (req, res) => {
  res.json({ 
    userId: 'User 01',
    userName: 'John Doe',
    userRole: 'Admin',
    userStatus: 'Active',
    userCreated: '2024-01-01',
})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})