import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  LOGIN,
  SIGNIN,
} from './endpoints';

const request = (endpoint, method, object, config) => {
  console.log(`Endpoint ${method} ${endpoint}`);
  console.log(`Object: ${JSON.stringify(object)}`);
  console.log(`Config: ${JSON.stringify(config)}`);

  switch (method) {
    case 'POST':
      if (config !== null) {
        return axios.post(endpoint, object, config)
          .then((response) => (
            response
          ))
          .catch((err) => (
            err
          ))
      } else {
        return axios.post(endpoint, object)
          .then((response) => (
            response
          ))
          .catch((err) => (
            err
          ))
      }
    case 'GET':
      if (config !== null) {
        return axios.get(endpoint, config)
          .then((response) => (
            response
          ))
          .catch((err) => (
            err
          ));
      }

      return axios.get(endpoint)
        .then((response) => (
          response
        ))
        .catch((err) => (
          err
        ));
    default:
      break;
  }
};


const login = async (email, password, mocked) => {
  if (mocked) {
    const mock = new MockAdapter(axios);

    mock.onPost(LOGIN, {
      email: 'user@user.com',
      password: 'password',
    }).reply(200);
  }

  const response = await request(LOGIN, 'POST', { email, password }, null);

  return response;
};

const signin = async (cpf, name, email, password, mocked) => {
    if (mocked) {
      const mock = new MockAdapter(axios);
  
      mock.onPost(LOGIN, {
        cpf: 'cpf',
        name: 'name',
        email: 'user@user.com',
        password: 'password',
      }).reply(200);
    }
  
    const response = await request(SIGNIN, 'POST', { cpf, name, email, password }, null);
  
    return response;
};
  
export {
  login,
  signin,
};