import { Dimensions } from 'react-native';

export const ANDROID = 'android';
export const IOS = 'ios';

const { width, height } = Dimensions.get('window');

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

export const CREATE_TARGET_HEIGHT = 400;
export const TOPICS_HEIGHT = 400;
