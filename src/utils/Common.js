/**
 * to store jwt tokens in session storage
 * @returns functions for storing and removing tokens
   @author Shravya P
 */
// return the token from the session storage
export const getToken = () => localStorage.getItem('token') || null;

export const getEmail = () => localStorage.getItem('email') || null;

// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
};

// set the token and user from the session storage
export const setUserSession = (token, email) => {
  localStorage.setItem('token', token);
  localStorage.setItem('email', email);
};
