const {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
} = require('react-native');
import music_data from './music_data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';
import {useState} from 'react';
const App = () => {
  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeparator = () => <View style={styles.separator} />;
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };
  const [list, setList] = useState(music_data);
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <View>
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
export default App;
