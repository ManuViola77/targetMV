import React from 'react';
import { Text } from 'react-native';
import { string } from 'prop-types';

import styles from './styles';

const Header = ({ title }) => <Text style={styles.title}>{title}</Text>;

Header.propTypes = {
  title: string.isRequired,
};

export default Header;
