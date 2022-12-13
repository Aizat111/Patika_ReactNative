import React from 'react';
import { TextInput, View } from 'react-native';
import styles  from './SearchBar.Style'

const SearchBar = (props) =>{
    return (
        <View style={styles.conatiner}>
            <TextInput
            placeholder='Ara...'
            onChangeText={props.onSearch}/>
            
        </View>
    )
}
export default SearchBar;