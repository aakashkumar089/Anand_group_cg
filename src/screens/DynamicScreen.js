import {useRoute} from '@react-navigation/core';
import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import {fetchTodo} from '../utils/api';

const DynamicScreen = () => {
  const route = useRoute();
  const {todoId} = route.params;

  const {data, error, status} = useQuery(['fetchTodo', todoId], fetchTodo);

  if (status == 'loading') {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  if (status === 'error') {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <Text>{error.message}</Text>
      </View>
    );
  }

  console.log(data);

  return (
    <View style>
      <Text style={{fontSize: 18}}>todo id is {todoId}</Text>
      <Text style={{fontSize: 20}}>{data.data.title}</Text>
    </View>
  );
};

export default DynamicScreen;
