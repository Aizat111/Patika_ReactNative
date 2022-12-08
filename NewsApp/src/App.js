import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Image,
  Dimensions,
  Text
} from 'react-native';

import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard';
import {keyExtractor} from 'react-native/Libraries/Lists/VirtualizeUtils';

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;

  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
     <Text style={styles.header}>News</Text>
        <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {news_banner_data.map(bannerNews => (
            <Image
              style={styles.banner_image}
              source={{uri: bannerNews.imageUrl}}
            />
          ))}
        </ScrollView>
        )}
          keyExtractor={(item, index) => item.u_id.toString()}
          data={news_data}
          renderItem={renderNews}
        />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  header : {
    fontSize : 50,
    fontWeight : 'bold'
  }
});

export default App;
