import React from 'react' ;
import { FlatList, SafeAreaView, StyleSheet} from 'react-native';
import news_data from 'news_data.json'
import NewsCard from './src/components/NewsCard'

export const App = () =>{
  return(
    <SafeAreaView>
      <View>
    {/* <FlatList
    data={news_data}
    renderItem={({item})=><NewsCard new={item}/>}
    /> */}

   
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#eceff1'
  }
})