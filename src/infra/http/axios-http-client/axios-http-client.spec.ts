import { AxiosHttpClient } from './axios-http-client'
import { mockAxios } from '@/infra/test/mock-axios'
import { mockPostRequest } from '@/data/test'

import axios from 'axios'

jest.mock('axios')

type sutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): sutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()

  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct url, verb and body', async () => {
    const { sut, mockedAxios } = makeSut()
    const request = mockPostRequest()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return the corrent status code and body', () => {
    const { sut, mockedAxios } = makeSut()
    const request = mockPostRequest()
    const httpResponse = sut.post(request)
    expect(httpResponse).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
