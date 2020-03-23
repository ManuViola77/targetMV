import { bool, number, object, shape, string } from 'prop-types';

export const avatarShape = shape({
  normalUrl: string,
  originalUrl: string,
  smallThumbUrl: string,
});

export const locationShape = shape({
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number,
});

export const matchesShape = shape({
  lastMessage: string,
  matchId: number,
  topicIcon: string,
  unreadMessages: number,
  user: shape({
    avatar: avatarShape,
    fullName: string,
    id: number,
  }),
});

export const pickerShape = shape({
  label: string,
  value: string,
});

export const selectedTargetShape = shape({
  id: number,
  lat: number,
  lng: number,
  location: locationShape,
  radius: number,
  title: string,
  topic: topicItemShape,
  topicId: number,
});

export const subViewStateShape = shape({
  bounceValue: object,
  isHidden: bool,
});

export const topicItemShape = shape({
  icon: string,
  id: number,
  label: string,
});

export const topicShape = shape({
  topic: topicItemShape,
});

export const userShape = shape({
  avatar: avatarShape,
  email: string.isRequired,
  firstName: string,
  fullName: string,
  gender: string,
  id: number.isRequired,
  lastName: string,
  username: string.isRequired,
});
