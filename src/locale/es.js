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
    errorMessage: 'No se obtuvo ninguna respuesta',
    errorNotJSON: 'La respuesta no es JSON',
  },

  COMMON: {
    headerTitle: 'Target MV',
    loading: 'Cargando',
    somethingWentWrong: 'Ocurrió un error',
  },

  GENDER: {
    placeholder: { label: 'Seleccione su género', value: '' },
    options: [
      { label: 'Hombre', value: 'male' },
      { label: 'Mujer', value: 'female' },
      { label: 'Otro', value: 'other' },
    ],
  },

  LOGIN: {
    title: 'Iniciar sesión',
    email: 'Email',
    password: 'Contraseña',
    button: 'Iniciar sesión',
    forgotPass: '¿Olvidaste tu contraseña?',
    connectFb: 'Conectar con Facebook',
    signUp: 'Registrarse',
  },

  SIGN_UP: {
    title: 'Registrarse',
    name: 'Nombre',
    email: 'Email',
    password: 'Contraseña',
    confirmPassword: 'Confirmar Contraseña',
    gender: 'Género',
    button: 'Registrarse',
    signIn: 'Iniciar sesión',
  },

  SIGN_UP_ERROR: {
    emptyName: 'Nombre no puede ser vacío',
    emptyEmail: 'Email no puede ser vacío',
    emptyPassword: 'Contraseña no puede ser vacía',
    emptyConfirmPassword: 'Confirmar Contraseña no puede ser vacía',
    emptyGender: 'Género no puede ser vacío',
    emailNotValid: 'Email no válido',
    passwordSixChar: 'La contraseña debe tener mínimo 6 caracteres',
    confirmPasswordMatch: 'Confirmar Contraseña no es igual a Contraseña',
  },

  SIGN_UP_HELP: {
    helpPassword: 'MIN. 6 CARACTERES',
  },

  TITLE: {
    main: 'Puntos Target',
    profile: 'Perfil',
  },

  TOPICS: [
    {
      icon: christmas,
      name: 'Navidad',
    },
    {
      icon: pokemongo,
      name: 'PokemonGo',
    },
    {
      icon: football,
      name: 'Fútbol',
    },
    {
      icon: travel,
      name: 'Viajar',
    },
    {
      icon: politics,
      name: 'Política',
    },
    {
      icon: art,
      name: 'Arte',
    },
    {
      icon: dating,
      name: 'Citas',
    },
    {
      icon: music,
      name: 'Música',
    },
    {
      icon: movies,
      name: 'Películas',
    },
    {
      icon: series,
      name: 'Series',
    },
    {
      icon: food,
      name: 'Comida',
    },
  ],
};
