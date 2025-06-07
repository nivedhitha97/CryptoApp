/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import HomeStyle from '../../styles/HomeStyle';

function HomeScreen({currencyList, onRefresh, isFetching}) {

  function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  const ListItems = ({item}) => {
    return (
      <View style={HomeStyle.currencyItem}>
        <View style={HomeStyle.itemContainer}>
          <Image source={{uri: item.image}} style={HomeStyle.iconStyle} />
          <View style={HomeStyle.nameContainer}>
            <Text style={HomeStyle.symbolText}>
              {item.symbol.toUpperCase()}
            </Text>
            <Text style={HomeStyle.nameText}>{item.name}</Text>
          </View>
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
      <View style={HomeStyle.container}>
        <View style={HomeStyle.mainContainer}>
          <Text style={HomeStyle.titleText}>Cryptocurrency</Text>
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
    </>
  );
}

export default HomeScreen;
