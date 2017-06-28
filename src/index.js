/* eslint-disable no-console */

import Express from 'express'

import { db, middlewares } from './configs'
import { getAll, populate, register } from './controllers'

const MODE = process.env.MODE || 'development'
const PORT = process.env.PORT || 3000

const app = new Express()
app.set('view engine', 'ejs')
app.use(Express.static('public'))
middlewares(app)

app.get('/', (req, res) => getAll(req, res))
app.get('/populate', (req, res) => populate(req, res))
app.post('/register', (req, res) => register(req, res))

db
  .sync({ logging: false }) // this only disables seeing all the data
  .then(() => {
    app.listen(PORT, err => {
      if (err) throw err
      // wondering if this is the issue with that...
      console.log(`
    App running on: ${PORT} in ${MODE}.
  `)
    })
  })
  .catch(e => {
    throw e
  })
