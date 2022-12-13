import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  content_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  inner_container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
  },
  info_container: {
    flexDirection: 'row',
  },
  artist: {},
  year: {
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 12,
  },
  sold_out_container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  sold_out_title: {
    color: 'red',
    fontSize: 12
  },
});
