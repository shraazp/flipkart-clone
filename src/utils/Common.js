/**
 * to store jwt tokens in session storage
 * @returns functions for storing and removing tokens
   @author Shravya P
 */
// return the token from the session storage
export const getToken = () => sessionStorage.getItem('token') || null;

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
};

// set the token and user from the session storage
export const setUserSession = (token) => {
  sessionStorage.setItem('token', token);
};
