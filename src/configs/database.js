import Sequelize from 'sequelize'

const db = new Sequelize('join_us', 'rockchalkwushock', 'password', {
  host: 'localhost',
  dialect: 'postgres'
})

export default db
