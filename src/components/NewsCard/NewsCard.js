import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const NewsCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.news.imageUrl}}></Image>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{props.news.title}</Text>
        <Text style={styles.description}>{props.news.description}</Text>
        <Text style={styles.author}>{props.news.author}</Text>
      </View>
    </View>
  );
};

export default NewsCard;
