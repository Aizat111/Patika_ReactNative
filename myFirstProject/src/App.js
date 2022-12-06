import React from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';
import Card from './components/Card'
function App() {
  return (
    <SafeAreaView style={style.container}>
      <Card title = 'Eddard Stark' text='Winter is coming...'/>
      <Card title = 'Arif Işık' text='Uzaylılar tarafından kaçırıldım... evet tarafından'/>
      <Card title = 'Serbest' text='İlhanmi abi, sen söyle ben başka bir ilde miyim?'/>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container : {
    backgroundColor: 'yellow',
    flex: 1,
  }
})

export default App;
