import {StyleSheet} from 'react-native';

const HomeStyle = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
  },
  mainContainer: {
    marginVertical: 60,
    backgroundColor: '#FAFAFA',
    paddingBottom: 100,
  },
  titleText: {
    textAlign: 'left',
    fontWeight: 700,
    fontSize: 25,
    margin: 20,
  },
  currencyItem: {
    flexDirection: 'row',
    margin: 20,
    marginBottom: 10,
    backgroundColor: 'white',
    height: 100,
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: 1,
    shadowOpacity: 0.5,
    justifyContent: 'space-between',
  },
  itemContainer: {
    flexDirection: 'row',
  },
  iconStyle: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    resizeMode: 'contain',
  },
  nameContainer: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  symbolText: {
    textAlign: 'left',
    fontWeight: 700,
    fontSize: 20,
  },
  nameText: {
    textAlign: 'left',
    fontSize: 16,
    marginTop: 7,
    color: '#83878C',
  },
  priceContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  priceText: {
    textAlign: 'right',
    fontWeight: 700,
    fontSize: 20,
  },
  priceChangeText: {
    textAlign: 'right',
    fontSize: 16,
    marginTop: 7,
  },
});

export default HomeStyle;
