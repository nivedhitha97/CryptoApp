/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import HomeScreen from '../screens/HomeScreen';
import {
  CurrencyListActions,
  CurrencyListStateClear,
} from '../../services/actions/HomeAction';
import {View, ActivityIndicator} from 'react-native';
import HomeStyle from '../../styles/HomeStyle';

function Home({}) {
  const currencyListData = useSelector(state => state.Home.currencyListData);
  const [currencyList, setCurrencyList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSearch, setSearch] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    clearState();
    console.log('api call in focused check');
    getCurrencyList();
  }, []);

  useEffect(() => {
    console.log('currencylistdata ', currencyListData);
    if (
      currencyListData !== undefined &&
      currencyListData !== '' &&
      currencyListData !== null
    ) {
      setIsFetching(false);
      setLoading(false);
      setCurrencyList(currencyListData);
    }
  }, [currencyListData]);

  const clearState = async () => {
    dispatch(CurrencyListStateClear());
  };

  const getCurrencyList = useCallback(() => {
    dispatch(CurrencyListActions());
  });

  const getCurrencyListPullRefresh = async () => {
    setLoading(true);
    setCurrencyList([]);
    getCurrencyList();
  };

  const onRefresh = () => {
    setIsFetching(true);
    getCurrencyListPullRefresh();
  };

  const searchData = () => {
    setSearch(!isSearch);
  };

  return (
    <>
      {loading ? (
        <View style={HomeStyle.loadingContainer}>
          <View style={HomeStyle.indicatorContainer}>
            <ActivityIndicator size="large" color="black" />
          </View>
        </View>
      ) : (
        <HomeScreen
          currencyList={currencyList}
          onRefresh={onRefresh}
          isFetching={isFetching}
          isSearch={isSearch}
          searchData={searchData}
          setSearch={setSearch}
        />
      )}
    </>
  );
}

export default Home;
