import { Person } from '../models'
import { generateData } from '../utils'

const populate = async (req, res) => {
  const data = generateData()
  try {
    await Person.bulkCreate(data)
      .then(() => {
        res.send('Database populated.')
      })
      .catch(e => {
        res.send('You screwed the pooch somewhere somehow someway...')
        throw e
      })
  } catch (e) {
    throw e
  }
}

export default populate
