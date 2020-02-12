import art from 'assets/images/art.png';
import christmas from 'assets/images/christmas.png';
import dating from 'assets/images/dating.png';
import food from 'assets/images/food.png';
import football from 'assets/images/football.png';
import movies from 'assets/images/movies.png';
import music from 'assets/images/music.png';
import pokemongo from 'assets/images/pokemongo.png';
import politics from 'assets/images/politics.png';
import series from 'assets/images/series.png';
import travel from 'assets/images/travel.png';

export default {
  API: {
    errorMessage: 'No response returned from fetch',
    errorNotJSON: 'Response not JSON',
  },

  COMMON: {
    headerTitle: 'Target MV',
    loading: 'Loading',
    somethingWentWrong: 'Something Went Wrong',
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
    main: 'Target Points',
    profile: 'Profile',
  },

  // usage strings.TOPICS.topics[0].icon
  // import strings from 'locale';
  // <Image source={strings.TOPICS.topics[0].icon} />
  TOPICS: {
    topics: [
      {
        id: 1,
        icon: christmas,
        name: 'Christmas',
      },
      {
        id: 2,
        icon: pokemongo,
        name: 'PokemonGo',
      },
      {
        id: 3,
        icon: football,
        name: 'Football',
      },
      {
        id: 4,
        icon: travel,
        name: 'Travel',
      },
      {
        id: 5,
        icon: politics,
        name: 'Politics',
      },
      {
        id: 6,
        icon: art,
        name: 'Art',
      },
      {
        id: 7,
        icon: dating,
        name: 'Dating',
      },
      {
        id: 8,
        icon: music,
        name: 'Music',
      },
      {
        id: 9,
        icon: movies,
        name: 'Movies',
      },
      {
        id: 10,
        icon: series,
        name: 'Series',
      },
      {
        id: 11,
        icon: food,
        name: 'Food',
      },
    ],
  },
};
