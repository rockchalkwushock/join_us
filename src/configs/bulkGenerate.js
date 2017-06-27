/* eslint-disable no-console */
const pgp = require('pg-promise')({
  capSQL: true
})
const faker = require('faker')

// configure connection
const cn = {
  host: 'localhost',
  port: 5432,
  user: 'rockchalkwushock',
  password: 'password',
  database: 'join_us'
}

// create database
const db = pgp(cn)
/**
 * The following code is from the pg-promise wiki
 * @see https://github.com/vitaly-t/pg-promise/wiki/Performance-Boost#the-solution
 */
function Inserts(template, data) {
  if (!(this instanceof Inserts)) {
    return new Inserts(template, data)
  }
  this._rawDBType = true
  this.formatDBType = function() {
    return data.map(d => `(${pgp.as.format(template, d)})`).join()
  }
}

// Create fake user data.
const d = []
for (let i = 0; i < 500; i++) {
  d.push({
    email: faker.internet.email(),
    created_at: faker.date.past()
  })
}

// Provide the template & data for inserting.
const values = new Inserts('${email}, ${created_at}', d)

db.none('DROP TABLE people;')
db.none('CREATE TABLE people(email VARCHAR(255), created_at TIMESTAMP);')
db
  .none('INSERT INTO people (email, created_at) VALUES $1;', values)
  .then(() => {
    pgp.end()
  })
  .catch(e => {
    pgp.end()
    throw e
  })
