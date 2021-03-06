import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  allLeftSpace: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  boldLink: {
    fontWeight: 'bold',
    marginTop: 40,
    textTransform: 'uppercase',
  },

  container: {
    alignItems: 'center',
    flex: 1,
  },

  image: {
    flex: 1,
    height: 260,
  },

  lineStyle: {
    borderWidth: 0.5,
    marginBottom: 20,
    width: 121,
  },

  link: {
    alignSelf: 'center',
    marginBottom: 15,
    textTransform: 'uppercase',
  },

  safeArea: {
    flex: 1,
    marginTop: 85,
  },

  scrollView: {
    flexGrow: 1,
  },

  smallLink: {
    fontSize: 12,
  },
});

export default styles;
