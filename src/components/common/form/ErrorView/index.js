import React from 'react';
import { Text } from 'react-native';
import { string } from 'prop-types';
import styles from './styles';

const ErrorView = ({ error }) => (
  <Text style={styles.errorMessage}>{error}</Text>
);

ErrorView.propTypes = {
  error: string,
};

ErrorView.defaultProps = {
  error: '',
};

export default ErrorView;
