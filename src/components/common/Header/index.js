import React from 'react';
import { string } from 'prop-types';
import { Text } from 'react-native';
import styles from './styles';

const Header = ({ title }) => <Text style={styles.title}>{title}</Text>;

Header.propTypes = {
  title: string.isRequired,
};

export default Header;
