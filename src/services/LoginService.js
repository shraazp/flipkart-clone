/**
 * Connect to API and perform either login or register the user operations
and store the returned token.
 * @author:Shravya P
*/
import axios from 'axios';
import { setUserSession } from '../utils/Common';

export async function LoginAPI(email, password) {
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
