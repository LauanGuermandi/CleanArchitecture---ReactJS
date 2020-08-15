import { AccountModel } from '../models/account-model'
import faker from 'faker'

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})
