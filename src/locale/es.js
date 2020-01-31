export default {
  COMMON: {
    headerTitle: 'Target MV',
    loading: 'Cargando',
    somethingWentWrong: 'Ocurrió un error',
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

  GENDER: {
    placeholder: { label: 'Seleccione su género', value: '' },
    options: [
      { label: 'Hombre', value: 'male' },
      { label: 'Mujer', value: 'female' },
      { label: 'Otro', value: 'other' },
    ],
  },

  API: {
    errorMessage: 'No se obtuvo ninguna respuesta',
    errorNotJSON: 'La respuesta no es JSON',
  },
};
