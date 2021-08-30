import { MissingParamError } from '../errors/missing-param-error';
import { HttpRequest, HttpResponse } from '../protocols/http';

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const { name, email } = httpRequest.body;
    if (!name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name'),
      };
    }
    if (!email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email'),
      };
    }
    return {
      statusCode: 200,
      body: {},
    };
  }
}
