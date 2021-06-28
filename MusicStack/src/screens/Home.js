/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});

const Header = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4aaee8',
      }}>
      <Text style={{color: 'white'}}>SONGS</Text>
    </View>
  );
};

const MusicItem = ({data, onMusicDetailPress = () => {}}) => {
  const {
    wrapperType,
    trackName,
    artworkUrl100,
    trackPrice,
    currency,
    artistName,
  } = data;
  if (wrapperType !== 'track') {
    return <></>;
  }
  return (
    <TouchableOpacity onPress={() => onMusicDetailPress()}>
      <View style={{width: '100%', paddingHorizontal: 16, paddingVertical: 8}}>
        <View
          style={{
            width: width - 32,
            borderWidth: 1,
            borderColor: '#73c9ff',
            borderRadius: 6,
            overflow: 'hidden',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 100, height: 100, alignSelf: 'center'}}
              source={{uri: artworkUrl100}}
            />
            <View style={{marginLeft: 12}}>
              <Text
                style={{
                  color: '#1c7fbd',
                  marginTop: 8,
                  fontWeight: '800',
                  width: width - 156,
                }}>
                {trackName}
              </Text>
              <Text
                style={{color: '#24a0ed', marginTop: 8, width: width - 156}}>
                {artistName}
              </Text>
              <Text
                style={{color: '#24a0ed', marginTop: 8, width: width - 156}}>
                {currency} {trackPrice}
              </Text>
              {/* <Text style={{color: '#1c7fbd'}}>{trackName}</Text> */}
              {/* {longDescription && (
                <Text style={{color: '#4aaee8'}}>{longDescription}</Text>
              )} */}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Home = props => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      getMusicDetails();
    }, 1000);
  }, []);

  const getMusicDetails = () => {
    return fetch('https://itunes.apple.com/search?term=Michael+jackson')
      .then(response => response.json())
      .then(json => {
        console.log(JSON.stringify(json));
        setData(json.results);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setData([]);
        setLoading(false);
      });
  };

  const onMusicDetailPress = item => {
    props.navigation.navigate('Music Details', {details: item});
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#4aaee8" />
      {/* <Header /> */}
      <FlatList
        style={{width: '100%'}}
        data={data}
        renderItem={({item}) => (
          <MusicItem
            data={item}
            onMusicDetailPress={() => onMusicDetailPress(item)}
          />
        )}
        keyExtractor={item => item.trackId}
      />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator
          style={{alignSelf: 'center'}}
          animating={isLoading}
          color="#0000ff"
        />
        <Text style={{color: 'blue', marginTop: 8}}>Please wait</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
