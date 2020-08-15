import { HttpPostClient } from 'data/protocols/http/http-post-client'
import { HttpStatusCode } from '../../protocols/http/http-response'
import { AuthenticationParams } from '@/domain/usecases/authentication'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentilas-error'
import { UnexpectedError } from '@/domain/errors/unexpected-error'

class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpresponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpresponse.statusCode) {
      case HttpStatusCode.ok: break
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}

export default RemoteAuthentication
