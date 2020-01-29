import React from 'react';
import { string } from 'prop-types';
import { Text } from 'react-native';
import styles from './styles';

/*
  Header Props:
  title(*): Text for the Header
*/

const Header = ({ title }) => <Text style={styles.title}>{title}</Text>;

Header.propTypes = {
  title: string.isRequired,
};

export default Header;
