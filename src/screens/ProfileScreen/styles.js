import { StyleSheet } from 'react-native';

const profileImageSize = 120;

const styles = StyleSheet.create({
  image: {
    height: 200,
    marginBottom: 20,
    marginLeft: 20,
    width: 300,
  },

  profileImage: {
    borderRadius: profileImageSize / 2,
    height: profileImageSize,
    marginLeft: 145,
    marginTop: 55,
    width: profileImageSize,
  },
});

export default styles;
