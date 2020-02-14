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

  CREATE_TARGET: {
    areaNumeric: 'El área debe ser numérico',
    area: 'Especificar largo del área',
    button: 'Guardar target',
    helpTitle: 'Elegir título para el target',
    helpTopic: '¿De qué querés hablar?',
    title: 'Título del target',
    topic: 'Seleccionar un tema',
  },

  CREATE_TARGET_ERROR: {
    emptyArea: 'Area no puede ser vacío',
    emptyLatitude: 'Latitude no puede ser vacío',
    emptyLongitude: 'Longitude no puede ser vacío',
    emptyTitle: 'Title no puede ser vacío',
    emptyTopic: 'Topic no puede ser vacío',
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
    createTarget: 'Crear Nuevo Target',
    main: 'Puntos Target',
    profile: 'Perfil',
  },
};
