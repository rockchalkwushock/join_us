import faker from 'faker'

export const generateData = () => {
  const d = []
  for (let i = 0; i < 500; i++) {
    d.push({
      email: faker.internet.email()
      // createdAt: faker.date.past()
    })
  }
  return d
}
