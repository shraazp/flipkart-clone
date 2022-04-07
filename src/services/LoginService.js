/**
 * Connect to API and perform either login or register the user operations
and store the returned token.
 * @author:Shravya P
*/
import axios from 'axios';
import { setUserSession } from '../utils/Common';

export function LoginAPI(email, password) {
  return axios.post('http://localhost:1337/api/auth/local', {
    identifier: email,
    password,
  }).then((data) => {
    setUserSession(data.data.jwt, email);
    return data;
  }).catch((err) => { throw err; });
}
export function SignUpAPI(email, password) {
  return axios.post('http://localhost:1337/api/auth/local/register', {
    username: email.substring(0, email.indexOf('@')),
    email,
    password,
  }).then((data) => {
    setUserSession(data.data.jwt, email);
    return data;
  }).catch((err) => {
    throw err;
  });
}
