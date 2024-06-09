import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  banner_image: {
    height: windowHeight * 0.2,
    width: windowWidth * 0.5,
    marginHorizontal: windowHeight * 0.015,
  },
});
