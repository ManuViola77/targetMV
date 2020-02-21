import { bool, number, object, shape, string } from 'prop-types';

export const locationShape = shape({
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number,
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
