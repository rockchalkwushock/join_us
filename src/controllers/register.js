import { Person } from '../models'

const register = async ({ body: { email } }, res) => {
  console.log(email)
  try {
    await Person.create({ email, created_at: new Date() })
    res.redirect('/')
  } catch (e) {
    throw e
  }
}

export default register
