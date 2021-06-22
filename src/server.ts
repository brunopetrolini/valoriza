import 'reflect-metadata'
import express from 'express'

import './database'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello World' })
})

app.listen(3333, () => console.log('Server running at port 3333'))
