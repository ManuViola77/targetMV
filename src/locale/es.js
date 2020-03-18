export default {
  API: {
    errorMessage: 'No se obtuvo ninguna respuesta',
    errorNotJSON: 'La respuesta no es JSON',
  },

  CHANGE_PASSWORD: {
    cancel: 'Cancelar',
    confirmPassword: 'Confirmar Nueva Contraseña',
    currentPassword: 'Ingrese su Contraseña Actual',
    password: 'Nueva Contraseña',
    save: 'Confirmar',
  },

  CHANGE_PASSWORD_ERROR: {
    emptyPassword: 'Nueva Contraseña no puede ser vacía',
    emptyConfirmPassword: 'Confirmar Nueva Contraseña no puede ser vacía',
    emptyCurrentPassword: 'Contraseña Actual no puede ser vacía',
    passwordSixChar: 'La nueva contraseña debe tener mínimo 6 caracteres',
    confirmPasswordMatch:
      'Confirmar Nueva Contraseña no es igual a Nueva Contraseña',
  },

  CHAT: {
    send: 'Enviar',
    start: 'Empieza una conversación con ',
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

  DELETE_TARGET: {
    button: 'Eliminar',
    cancel: 'Cancelar',
    confirmText: '¿Seguro que desea eliminar este target?',
    rememberText:
      'Recuerde que si lo elimina, ya no podrá chatear con sus coincidencias',
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

  PHOTO_PERMISSION: {
    title: 'Explicación del Permiso',
    message:
      'Se quiere acceder a las fotos para poder elegir una como foto de perfil',
  },

  PROFILE: {
    email: 'Email',
    firstName: 'Nombre',
    lastName: 'Apellido',
    logOut: 'Cerrar Sesión',
    password: 'Cambiar Contraseña',
    save: 'Guardar Cambios',
    username: 'Usuario',
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
    changePassword: 'Cambiar Contraseña',
    chat: 'Chat',
    createTarget: 'Crear Nuevo Target',
    main: 'Puntos Target',
    photos: 'Fotos',
    profile: 'Perfil',
  },
};
