import React, { useCallback, useEffect } from 'react';
import { Image, ImageBackground, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useStatus, ERROR, LOADING, SUCCESS } from '@rootstrap/redux-tools';

import {
  getProfile,
  updateProfile,
  updateProfileReset,
} from 'actions/profileActions';
import { logout } from 'actions/userActions';
import default_profile_image from 'assets/images/default_profile_image.png';
import profile_logo from 'assets/images/profile_logo.png';
import Link from 'components/common/Link';
import Button from 'components/common/form/Button';
import ErrorView from 'components/common/form/ErrorView';
import Input from 'components/common/form/Input';
import {
  name as usernameField,
  email as emailField,
  firstName as firstNameField,
  lastName as lastNameField,
  gender as genderField,
  avatar as avatarField,
  errorMsg,
} from 'constants/fields';
import useFormStates from 'hooks/useFormStates';
import strings from 'locale';
import updateProfileValidations from 'validations/updateProfileValidations';
import styles from './styles';

const { PROFILE, COMMON } = strings;

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);
  const userId = useSelector(state => state.session.userId);

  useEffect(() => {
    dispatch(getProfile(userId));
  }, []);

  const {
    avatar = {},
    email = '',
    firstName = '',
    gender = '',
    lastName = '',
    username = '',
  } = useSelector(state => state.profile.user);

  const { status: logoutStatus } = useStatus(logout);
  const { status: getProfileStatus } = useStatus(getProfile);
  const { status: updateProfileStatus } = useStatus(updateProfile);

  const updateProfileRequest = useCallback(
    profile => dispatch(updateProfile(userId, profile)),
    [dispatch],
  );

  const {
    errors,
    handleChange,
    handleConfirmForm,
    resetState,
    values,
  } = useFormStates(updateProfileRequest);

  const initialState = {
    [usernameField]: username,
    [emailField]: email,
    [firstNameField]: firstName,
    [lastNameField]: lastName,
    [genderField]: gender,
    [avatarField]: avatar,
  };

  const initialErrors = {};

  const setInitialState = () => resetState(initialState, initialErrors);

  useEffect(() => {
    getProfileStatus === SUCCESS &&
      setInitialState() &&
      dispatch(updateProfileReset());
  }, [getProfileStatus]);

  useEffect(() => {
    switch (updateProfileStatus) {
      case SUCCESS:
        dispatch(updateProfileReset());
        navigation.goBack();
        break;

      case ERROR:
        errors[errorMsg] = COMMON.somethingWentWrong;
        break;
    }
  }, [updateProfileStatus]);

  return (
    <>
      <ImageBackground
        resizeMode="contain"
        source={profile_logo}
        style={styles.image}
      >
        <Image
          resizeMode="contain"
          source={
            avatar.normalUrl ? { uri: avatar.normalUrl } : default_profile_image
          }
          style={styles.profileImage}
        />
      </ImageBackground>
      <Input
        callback={newValue => handleChange(usernameField, newValue)}
        errorMessage={errors[usernameField]}
        text={values[usernameField]}
        title={PROFILE.username}
      />
      <Input
        callback={newValue => handleChange(emailField, newValue)}
        errorMessage={errors[emailField]}
        text={values[emailField]}
        title={PROFILE.email}
      />
      <Input
        callback={newValue => handleChange(firstNameField, newValue)}
        errorMessage={errors[firstNameField]}
        text={values[firstNameField]}
        title={PROFILE.firstName}
      />
      <Input
        callback={newValue => handleChange(lastNameField, newValue)}
        errorMessage={errors[lastNameField]}
        text={values[lastNameField]}
        title={PROFILE.lastName}
      />
      <Link text={PROFILE.password} onPress={() => {}} />
      <ErrorView error={errors[errorMsg]} />
      <Button
        title={PROFILE.save}
        onPress={() => handleConfirmForm(updateProfileValidations)}
      />
      <Link
        onPress={handleLogout}
        text={logoutStatus === LOADING ? COMMON.loading : PROFILE.logOut}
      />
    </>
  );
};

export default ProfileScreen;
