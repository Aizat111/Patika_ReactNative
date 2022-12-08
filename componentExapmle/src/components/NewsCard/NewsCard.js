import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './NewsCard.Style';
const NewsCard = news => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: news.imageUrl}}/>
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.description}>{news.description}</Text>
    </View>
  );
};

export default NewsCard;