import Sequelize from 'sequelize'

const connection = new Sequelize('join_us', 'rockchalkwushock', 'password', {
  dialect: 'postgres',
  host: 'localhost'
})

connection.sync().then(() => {}).catch(e => console.log(e))
