import { fakerJA as faker } from '@faker-js/faker'

export const createUser = (index) => {
  return {
    id: index,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    createdAt: faker.date.between({
      from: '2020-01-01T00:00:00.000Z',
      to: '2024-01-01T00:00:00.000Z',
    }),
    updatedAt: faker.date.between({
      from: '2020-01-01T00:00:00.000Z',
      to: '2024-01-01T00:00:00.000Z',
    }),
    version: 1,
  }
}
