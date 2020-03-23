import React, { useCallback, useEffect, useState } from 'react';
import { ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useStatus, ERROR, LOADING, SUCCESS } from '@rootstrap/redux-tools';

import {
  getProfile,
  updateProfile,
  updateProfileReset,
} from 'actions/profileActions';
import { logout } from 'actions/userActions';
import defaultProfileImage from 'assets/images/default_profile_image.png';
import profileLogo from 'assets/images/profile_logo.png';
import Link from 'components/common/Link';
import Button from 'components/common/form/Button';
import ErrorView from 'components/common/form/ErrorView';
import Input from 'components/common/form/Input';
import ImagePlaceholder from 'components/common/ImagePlaceholder';
import ChangePasswordModal from 'components/ChangePasswordModal';
import {
  name as usernameField,
  email as emailField,
  firstName as firstNameField,
  lastName as lastNameField,
  gender as genderField,
  avatar as avatarField,
  errorMsg,
} from 'constants/fields';
import { callbackParam, profileParam } from 'constants/parameters';
import { CAMERA_ROLL_SCREEN } from 'constants/screens';
import useFormStates from 'hooks/useFormStates';
import strings from 'locale';
import updateProfileValidations from 'validations/updateProfileValidations';
import styles, { profileImageSize } from './styles';

const { PROFILE, COMMON } = strings;

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);
  const userId = useSelector(({ session: { userId } }) => userId);

  const getProfileRequest = useCallback(() => {
    dispatch(getProfile(userId));
  }, [dispatch]);

  useEffect(() => {
    getProfileRequest();
  }, []);

  const {
    avatar = {},
    email = '',
    firstName = '',
    gender = '',
    lastName = '',
    username = '',
  } = useSelector(({ profile: { user } }) => user);

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
    if (updateProfileStatus === ERROR) {
      errors[errorMsg] = COMMON.somethingWentWrong;
    }
  }, [updateProfileStatus]);

  const saveChanges = useCallback(async () => {
    await handleConfirmForm(updateProfileValidations);
    if (updateProfileStatus === SUCCESS) {
      dispatch(updateProfileReset());
      navigation.goBack();
    }
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground
        resizeMode="contain"
        source={profileLogo}
        style={styles.image}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(CAMERA_ROLL_SCREEN, {
              [profileParam]: values,
              [callbackParam]: getProfileRequest,
            })
          }
        >
          <ImagePlaceholder
            borderRadius={profileImageSize / 2}
            icon={defaultProfileImage}
            iconUrl={avatar.normalUrl}
            placeholder={defaultProfileImage}
            placeholderStyle={styles.profileImagePlaceholder}
            style={styles.profileImage}
          />
        </TouchableOpacity>
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
      <Link text={PROFILE.password} onPress={() => setIsModalVisible(true)} />
      <ChangePasswordModal
        closeModal={() => setIsModalVisible(false)}
        isModalVisible={isModalVisible}
      />
      <ErrorView error={errors[errorMsg]} />
      <Button title={PROFILE.save} onPress={saveChanges} />
      <Link
        onPress={handleLogout}
        text={logoutStatus === LOADING ? COMMON.loading : PROFILE.logOut}
      />
    </ScrollView>
  );
};

export default ProfileScreen;
