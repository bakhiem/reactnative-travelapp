import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../assets/colors/colors';
Feather.loadFont();
Entypo.loadFont();

const windowHeight = Dimensions.get('window').height;

const Details = ({route, navigation}) => {
  const {item} = route.params;
  const pressButton = () => {
    createTwoButtonAlert()
  }
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Confirm",
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  return (
    <View style={styles.container}>
      <ImageBackground source={item.imageBig} style={styles.detailItemImage}>
        <View style={styles.menuBack}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="chevron-left"
              size={32}
              color={colors.white}
              style={styles.menuBack}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.discoverItemTittle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.detailItemWrapper}>
        <View style={styles.itemLiked}>
          <TouchableOpacity>
            <Entypo
              name="heart"
              size={32}
              color={item.liked ? colors.orange : colors.gray}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.detailItemInfo}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <View style={styles.moreInfoWrapper}>
            <View style={styles.infoWrapper}>
              <Text style={styles.infoText}>Price</Text>
              <View style={styles.infoValueWrapper}>
                <Text style={styles.infoValue}>${item.price}</Text>
                <Text style={styles.infoUnit}>/person</Text>
              </View>
            </View>
            <View style={styles.infoWrapper}>
              <Text style={styles.infoText}>Rating</Text>
              <View style={styles.infoValueWrapper}>
                <Text style={styles.infoValue}>{item.rating}</Text>
                <Text style={styles.infoUnit}>/5</Text>
              </View>
            </View>
            <View style={styles.infoWrapper}>
              <Text style={styles.infoText}>Duration</Text>
              <View style={styles.infoValueWrapper}>
                <Text style={styles.infoValue}>{item.price}</Text>
                <Text style={styles.infoUnit}> hours</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.bookBtn}
            onPress={() => pressButton()}
          >
            <Text style={styles.bookText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  detailItemImage: {
    paddingTop: 60,
    paddingBottom: 10,
    height: windowHeight * 0.6,
    justifyContent: 'space-between',
  },
  menuBack: {
    marginLeft: 10,
  },
  titleWrapper: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  discoverItemTittle: {
    color: colors.white,
    fontSize: 32,
  },
  discoverItemLocationText: {
    color: colors.white,
  },
  discoverItemLocationWrapper: {
    marginTop: 10,
    flexDirection: 'row',
  },
  detailItemWrapper: {
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 20,
    flex: 1,
  },
  itemLiked: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10.0,
    elevation: 4,
    position: 'absolute',
    right: 40,
    top: -32,
  },
  detailItemInfo: {
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  descriptionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  descriptionText: {
    color: colors.gray,
  },
  moreInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  infoWrapper: {},
  infoValueWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  infoText: {
    fontWeight: '700',
    color: colors.gray,
    textTransform: 'uppercase',
    fontSize: 12,
    marginBottom: 5,
  },
  infoValue: {
    color: colors.orange,
    fontSize: 24,
    fontWeight: '700',
  },
  infoUnit: {
    color: colors.gray,
    fontWeight: '600',
    fontSize: 14,
  },
  bookBtn: {
    backgroundColor: colors.orange,
    width: '100%',
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 10
  },
  bookText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700'
  }
});
export default Details;
