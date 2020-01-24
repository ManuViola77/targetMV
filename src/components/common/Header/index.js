import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const Header = ({ title }) => <Text style={styles.title}> {title} </Text>;

export default Header;
