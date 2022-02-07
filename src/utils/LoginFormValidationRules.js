/**
 * function that contains rules to validate email and password input
 * @param {object} values email and password
 * @returns error messages if present
@author:Shravya P
 */
export default function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Please enter valid Email ID/Mobile number';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Please enter valid Email ID/Mobile number';
  }
  if (!values.password) {
    errors.password = 'Please enter Password';
  } else if (values.password.length < 8) {
    errors.password = 'Please enter Password';
  }
  return errors;
}
