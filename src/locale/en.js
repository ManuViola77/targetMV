export default {
  API: {
    errorMessage: 'No response returned from fetch',
    errorNotJSON: 'Response not JSON',
  },

  CHANGE_PASSWORD: {
    cancel: 'Cancel',
    confirmPassword: 'Confirm new password',
    currentPassword: 'Enter your current password',
    password: 'New password',
    save: 'Done',
  },

  CHANGE_PASSWORD_ERROR: {
    emptyPassword: "New Password can't be blank",
    emptyConfirmPassword: "Confirm New Password can't be blank",
    emptyCurrentPassword: "Current Password can't be blank",
    passwordSixChar: 'New Password must be at least 6 characters long',
    confirmPasswordMatch: 'Confirm New Password is not equal to New Password',
  },

  CHAT: {
    send: 'Send',
    start: 'Start a conversation with ',
  },

  COMMON: {
    headerTitle: 'Target MV',
    loading: 'Loading',
    somethingWentWrong: 'Something Went Wrong',
  },

  CREATE_TARGET: {
    area: 'Specify area lenght',
    button: 'Save target',
    helpTitle: 'Choose a title for your target',
    helpTopic: 'What do you want to talk about?',
    title: 'Target title',
    topic: 'Select a topic',
  },

  CREATE_TARGET_ERROR: {
    areaNumeric: 'Area must be numeric',
    emptyArea: "Area can't be blank",
    emptyLatitude: "Latitude can't be blank",
    emptyLongitude: "Longitude can't be blank",
    emptyTitle: "Title can't be blank",
    emptyTopic: "Topic can't be blank",
  },

  DELETE_TARGET: {
    button: 'Delete',
    cancel: 'Cancel',
    confirmText: 'Are you sure you want to delete this target?',
    rememberText:
      "Remember that if you delete it, you won't be able to chat with it's matches anymore",
  },

  FACEBOOK_LOGIN: {
    cancel: 'Login was cancelled',
    error: 'Login failed with error: ',
  },

  GENDER: {
    placeholder: { label: 'Select your gender', value: '' },
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
    ],
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

  PHOTO_PERMISSION: {
    title: 'Permission Explanation',
    message: 'Want to access your photos so you can choose an avatar',
  },

  PROFILE: {
    email: 'Email',
    firstName: 'First Name',
    lastName: 'Last Name',
    logOut: 'Log out',
    password: 'Change Password',
    save: 'Save Changes',
    username: 'Username',
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

  TITLE: {
    changePassword: 'Change Password',
    chat: 'Chat',
    createTarget: 'Create New Target',
    main: 'Target Points',
    photos: 'Photos',
    profile: 'Profile',
  },
};
