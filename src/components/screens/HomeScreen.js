/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import HomeStyle from '../../styles/HomeStyle';
import SearchBar from '../../ui/SearchBar';

function HomeScreen({
  currencyList,
  onRefresh,
  isFetching,
  isSearch,
  searchData,
  setSearch,
}) {
  function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  const ListItems = ({item}) => {
    const lineData = [
      {value: item.low_24h},
      {value: item.current_price},
      {value: item.high_24h},
    ];
    return (
      <View style={HomeStyle.currencyItem}>
        <View style={{flexDirection: 'row', flex: 0.9}}>
          <View style={HomeStyle.itemContainer}>
            <Image source={{uri: item.image}} style={HomeStyle.iconStyle} />
            <View style={HomeStyle.nameContainer}>
              <Text style={HomeStyle.symbolText}>
                {item.symbol.toUpperCase()}
              </Text>
              <Text style={HomeStyle.nameText}>{item.name}</Text>
            </View>
          </View>
          {/* <View
            style={{
              position: 'absolute',
              right: 0,
              height: 70,
              alignItems: 'center',
            }}>
            <LineChart
              initialSpacing={0}
              data={lineData}
              spacing1={15}
              hideDataPoints1
              // hideAxesAndRules
              curved
              hideRules
              // hideYAxisText
            />
          </View> */}
        </View>
        <View style={HomeStyle.priceContainer}>
          <Text style={HomeStyle.priceText}>
            {currencyFormat(item.current_price)}
          </Text>
          <Text style={HomeStyle.priceChangeText}>
            {item.price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {!isSearch ? (
        <View style={HomeStyle.container}>
          <View style={HomeStyle.mainContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={HomeStyle.titleText}>Cryptocurrency</Text>
              <TouchableOpacity
                style={{padding: 5, position: 'absolute', right: 20}}
                onPress={() => {
                  searchData();
                }}>
                <Image source={require('../../assets/search.png')} />
              </TouchableOpacity>
            </View>
            <FlatList
              onRefresh={() => {
                onRefresh();
              }}
              refreshing={isFetching}
              data={currencyList}
              renderItem={({item, index}) => <ListItems item={item} />}
            />
          </View>
        </View>
      ) : (
        <SearchBar data={currencyList} setCancel={setSearch} />
      )}
    </>
  );
}

export default HomeScreen;
