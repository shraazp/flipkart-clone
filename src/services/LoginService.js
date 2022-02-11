/**
 * Connect to API and perform either login or register the user operations
and store the returned token.
 * @author:Shravya P
*/
import axios from 'axios';
import { setUserSession } from '../utils/Common';

export async function LoginAPI(email, password) {
<<<<<<< HEAD
  return axios.post('http://localhost:1337/api/auth/local', {
    identifier: email,
    password,
  }).then((data) => {
    setUserSession(data.data.jwt);
    return data;
  }).catch((err) => {
    throw err;
  });
=======
  try {
    const data = await axios.post('http://localhost:1337/api/auth/local', {
      identifier: email,
      password,
    });
    setUserSession(data.data.jwt);
    return data;
  } catch (error) {
    return error;
  }
>>>>>>> 7d2d08d96a24b54cba1e253485d6cc6ccbda7aa4
}
export async function SignUpAPI(email, password) {
  try {
    const data = await axios.post('http://localhost:1337/api/auth/local/register', {
      username: email.substring(0, email.indexOf('@')),
      email,
      password,
    });
    setUserSession(data.data.jwt);
    return data;
  } catch (error) {
    return error;
  }
}
