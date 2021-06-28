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
} from 'react-native';

import moment from 'moment';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', width: '100%'},
  titleText: {
    fontSize: 24,
    lineHeight: 36,
    marginTop: 16,
    fontWeight: '800',
    color: '#1c7fbd',
  },
  descriptionText: {
    fontSize: 18,
    lineHeight: 26,
    marginTop: 8,
    fontWeight: '300',
    color: '#24a0ed',
  },
});

// {
//   "wrapperType": "track",
//   "kind": "song",
//   "artistId": 32940,
//   "collectionId": 159292399,
//   "trackId": 159294478,
//   "artistName": "Michael Jackson",
//   "collectionName": "The Essential Michael Jackson",
//   "trackName": "Man In the Mirror",
//   "collectionCensoredName": "The Essential Michael Jackson",
//   "trackCensoredName": "Man In the Mirror",
//   "artistViewUrl": "https://music.apple.com/us/artist/michael-jackson/32940?uo=4",
//   "collectionViewUrl": "https://music.apple.com/us/album/man-in-the-mirror/159292399?i=159294478&uo=4",
//   "trackViewUrl": "https://music.apple.com/us/album/man-in-the-mirror/159292399?i=159294478&uo=4",
//   "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/3b/3c/a0/3b3ca094-a480-18e9-e2c8-ee3b6a5731af/mzaf_8588557206542350398.plus.aac.p.m4a",
//   "artworkUrl30": "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/9b/fe/1f/9bfe1f2d-c51e-0427-1075-21aac1f3b874/source/30x30bb.jpg",
//   "artworkUrl60": "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/9b/fe/1f/9bfe1f2d-c51e-0427-1075-21aac1f3b874/source/60x60bb.jpg",
//   "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/9b/fe/1f/9bfe1f2d-c51e-0427-1075-21aac1f3b874/source/100x100bb.jpg",
//   "collectionPrice": 16.99,
//   "trackPrice": 1.29,
//   "releaseDate": "1987-08-31T07:00:00Z",
//   "collectionExplicitness": "notExplicit",
//   "trackExplicitness": "notExplicit",
//   "discCount": 2,
//   "discNumber": 2,
//   "trackCount": 17,
//   "trackNumber": 5,
//   "trackTimeMillis": 320905,
//   "country": "USA",
//   "currency": "USD",
//   "primaryGenreName": "Pop",
//   "isStreamable": true
// }

const MusicDetailView = ({data}) => {
  const {artworkUrl100, artistName, collectionName, trackName, releaseDate} =
    data;
  return (
    <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
      <Image
        style={{width: width - 150, height: width - 150, marginTop: 24}}
        source={{uri: artworkUrl100}}
      />
      <Text style={styles.titleText}>{trackName}</Text>
      <Text style={styles.descriptionText}>Collection : {collectionName}</Text>
      <Text style={styles.descriptionText}>Artist : {artistName}</Text>
      <Text style={styles.descriptionText}>
        Release Date : {moment(releaseDate).format('DD MMMM, YYYY')}
      </Text>
    </View>
  );
};

const MusicDetail = props => {
  console.log(JSON.stringify(props.route.params.details));
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#4aaee8" />
      <MusicDetailView data={props.route.params.details} />
    </SafeAreaView>
  );
};

export default MusicDetail;
