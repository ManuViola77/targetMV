export default {
  COMMON: {
    headerTitle: 'Target MV',
    loading: 'Loading',
    somethingWentWrong: 'Something Went Wrong',
  },

  LOGIN: {
    title: 'Sign in',
    email: 'Email',
    password: 'Password',
    button: 'Sign in',
    forgotPass: 'Forgot your password?',
    connectFb: 'Connect with Facebook',
    signUp: 'Sign Up',
  },

  SIGN_UP: {
    title: 'Sign up',
    name: 'Name',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    gender: 'Gender',
    button: 'Sign up',
    signIn: 'Sign In',
  },

  SIGN_UP_ERROR: {
    emptyName: "Name can't be blank",
    emptyEmail: "Email can't be blank",
    emptyPassword: "Password can't be blank",
    emptyConfirmPassword: "Confirm Password can't be blank",
    emptyGender: "Gender can't be blank",
    emailNotValid: 'Email not valid',
    passwordSixChar: 'Password must be at least 6 characters long',
    confirmPasswordMatch: 'Confirm Password is not equal to Password',
  },

  SIGN_UP_HELP: {
    helpPassword: 'MIN. 6 CHARACTERS LONG',
  },

  GENDER: {
    placeholder: { label: 'Select your gender', value: '' },
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
    ],
  },

  API: {
    errorMessage: 'No response returned from fetch',
    errorNotJSON: 'Response not JSON',
  },
};
