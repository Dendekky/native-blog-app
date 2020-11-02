/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
//   TouchableOpacity,
  Image,
  // ImageBackground,
//   FlatList,
  Dimensions,
} from 'react-native';
import { WebView } from 'react-native-webview';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';

export default function PostScreen(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const { route: { params: { slug } } } = props;

  useEffect(() => {
    fetch(`https://marblesofhameedah.herokuapp.com/api/post/${slug}`)
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

//   const onPress = slug => {
//     props.navigation.navigate('Article', {
//       slug,
//     });
//   };

  if(isLoading) {
    return <Text>Loading.....</Text>
  }
  return (
    <ScrollView style={styles.container}>
      {/* <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      > */}
      <View style={styles.section}>
        <Text size={20} style={{ color: 'red' }}>
          Unique Post
        </Text>
      </View>
      <View style={{ flex: 1, padding: 8 }}>
        <Text size={20} style={{ color: 'red' }}>
          {data.title}
        </Text>
        <Text size={20} style={{ color: 'red' }}>
          {new Date(data.updatedAt).toDateString()}
        </Text>
        <Image style={{ height: 250, width: 300 }} source={{ uri: data.postImage }} />
        <WebView
          originWhitelist={['*']}
          source={{ html: data.body }}
        />
        {/* <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <> */}
        {/* <TouchableOpacity 
                  key={item.id} 
                  // onPress={() => this._openArticle(item)}
                >
                  <View style={styles.itemOneContainer}>
                    <View style={styles.itemOneImageContainer}>
                      <Image style={styles.itemOneImage} source={{ uri: item.postImage }} />
                    </View>
                    <View style={styles.itemOneContent}>
                      <Text style={styles.itemOneTitle} numberOfLines={1}>
                        {item.title}
                      </Text>
                      <Text
                        style={styles.itemOneSubTitle}
                        styleName="collapsible"
                        numberOfLines={3}
                      >
                        {item.excerpt}
                      </Text>
                      <Text style={styles.itemOnePrice} numberOfLines={1}>
                        {new Date(item.updatedAt).toDateString()}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity> */}

        {/* <TouchableOpacity
                key={item.id}
                style={styles.itemThreeContainer}
                onPress={() => onPress(item.slug)}
              >
                <View style={styles.itemThreeSubContainer}>
                  <Image source={{ uri: item.postImage }} style={styles.itemThreeImage} />
                  <View style={styles.itemThreeContent}>
                    <Text style={styles.itemThreeBrand}>{item.category}</Text>
                    <View>
                      <Text style={styles.itemThreeTitle}>{item.title}</Text>
                      <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
                          {item.excerpt}
                        </Text>
                    </View>
                    <View style={styles.itemThreeMetaContainer}>
                      {item.category && (
                        <View
                          style={[
                            styles.badge,
                            item.category === 'NEW' && { backgroundColor: colors.green },
                          ]}
                        >
                          <Text
                            style={{ fontSize: 10, color: colors.white }}
                            styleName="bright"
                          >
                            {item.category}
                          </Text>
                        </View>
                      )}
                      <Text style={styles.itemThreePrice}>{new Date(item.updatedAt).toDateString()}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.itemThreeHr} />
              </TouchableOpacity>
            </>
          )}
        /> */}
      </View>
      {/* </ImageBackground> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postSection: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#f2f2f2"
    // boxShadow: 1,
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  itemOneContainer: {
    flex: 1,
    width: Dimensions.get('window').width / 2 - 40,
  },
  itemOneImageContainer: {
    borderRadius: 3,
    overflow: 'hidden',
  },
  itemOneImage: {
    height: 200,
    width: Dimensions.get('window').width / 2 - 40,
  },
  itemOneTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneSubTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 13,
    color: '#B2B2B2',
    marginVertical: 3,
  },
  itemOnePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  itemOneContent: {
    marginTop: 5,
    marginBottom: 10,
  },
  itemThreeContainer: {
    backgroundColor: 'white',
    marginBottom: 8,
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemThreeImage: {
    height: 100,
    width: 100,
  },
  itemThreeContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  itemThreeBrand: {
    fontFamily: fonts.primaryRegular,
    fontSize: 14,
    color: '#617ae1',
  },
  itemThreeTitle: {
    fontFamily: fonts.primaryBold,
    fontSize: 16,
    color: '#5F5F5F',
  },
  itemThreeSubtitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 12,
    color: '#a4a4a4',
  },
  itemThreeMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemThreePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    color: '#5f5f5f',
    textAlign: 'right',
  },
  itemThreeHr: {
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
  badge: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
