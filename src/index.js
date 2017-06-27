/* eslint-disable no-console */

import Express from 'express'

import { middlewares } from './configs'

const MODE = process.env.MODE || 'development'
const PORT = process.env.PORT || 3000

const app = new Express()

middlewares(app)

app.listen(PORT, err => {
  if (err) throw err
  console.log(`
    App running on: ${PORT} in ${MODE}.
  `)
})
