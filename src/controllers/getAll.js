import { Person } from '../models'

const getAll = async (req, res) => {
  try {
    const count = await Person.count()
    res.render('../views/home', { count })
  } catch (e) {
    throw e
  }
}

export default getAll
