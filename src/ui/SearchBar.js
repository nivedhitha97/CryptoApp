import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import HomeStyle from '../styles/HomeStyle';

function SearchBar({data, setCancel}) {
  const [searchList, setSearchList] = useState(data);

  function search(text) {
    const list = [];
    data.map(item => {
      const name = item.name.toString().toLowerCase();
      if (name.includes(text.toLowerCase())) {
        list.push(item);
      }
    });
    setSearchList(list);
  }

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
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          margin: 20,
          marginTop: 80,
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 0.65,
            flexDirection: 'row',
            borderRadius: 15,
            height: 60,
            backgroundColor: 'white',
            borderColor: '#83878C',
            borderWidth: 0.5,
            alignItems: 'center',
            padding: 15,
          }}>
          <Image
            style={{width: 20, height: 20}}
            tintColor={'#83878C'}
            source={require('../assets/search.png')}
          />
          <TextInput
            style={{fontSize: 18, marginLeft: 10}}
            onChangeText={text => search(text)}
            // value={text}
            placeholder="Search"
            autoFocus
          />
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setCancel(false)}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 700,
              color: 'blue',
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={searchList}
        renderItem={({item, index}) => <ListItems item={item} />}
      />
    </View>
  );
}

export default SearchBar;
