import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: windowHeight * 0.015,
    borderRadius: windowHeight * 0.008,
  },
  image: {
    height: windowHeight * 0.25,
    borderTopLeftRadius: windowHeight * 0.008,
    borderTopRightRadius: windowHeight * 0.008,
  },
  title: {
    fontWeight: 'bold',
    fontSize: windowHeight * 0.02,
  },
  description: {
    marginTop: windowHeight * 0.007,
  },
  innerContainer: {
    padding: windowHeight * 0.01,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
