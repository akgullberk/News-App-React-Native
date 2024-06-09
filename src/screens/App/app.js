import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import styles from './styles';
import news_data from '../../../news_data.json';
import {NewsCard, HorizontalNewsCard} from '../../components/index';

const app = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => <HorizontalNewsCard />}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

export default app;
