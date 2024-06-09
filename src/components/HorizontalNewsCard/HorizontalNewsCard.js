import {Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import news_banner_data from '../../../news_banner_data.json';

const HorizontalNewsCard = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {news_banner_data.map(bannerNews => (
        <Image
          style={styles.banner_image}
          source={{uri: bannerNews.imageUrl}}
        />
      ))}
    </ScrollView>
  );
};

export default HorizontalNewsCard;
