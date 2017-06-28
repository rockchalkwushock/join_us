import Sequelize from 'sequelize'

import { db } from '../configs'

const Person = db.define('person', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    primaryKey: true,
    validate: {
      isEmail: true
    }
  }
  // createdAt: {
  //   type: Sequelize.TIME,
  //   allowNull: false
  // }
})

export default Person
