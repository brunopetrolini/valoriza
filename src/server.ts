import 'dotenv'
import 'reflect-metadata'
import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'

import { router } from './routes'

import './database'

const app = express()

app.use(express.json())

app.use(router)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return response.status(400).json({ error: error.message })
  }

  return response.status(500).json({ status: 'UnexpectedError', message: 'Internal Server Error' })
})

app.listen(3333, () => console.log('Server running at port 3333'))
