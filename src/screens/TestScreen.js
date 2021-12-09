import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  Text,
  View,
  Button,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useQuery} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/store';
import {fetchTodos} from '../utils/api';

const TestScreen = () => {
  const dispatch = useDispatch();
  const {isLoggedIn, products} = useSelector(state => ({
    isLoggedIn: state.auth.isLoggedIn,
    products: state.cart.products,
  }));

  const makeLogin = () => {
    console.log('i am logigngn');
    dispatch(login());
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Text>I am {isLoggedIn ? 'LoggedIn' : 'LoggedOut'}</Text> */}
      <Button title="login" onPress={makeLogin} />
    </View>
  );
};

// const TestScreen = () => {
//   const {data, error, status} = useQuery('fetchTodos', fetchTodos);
//   const navigation = useNavigation();
//   if (status == 'loading') {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
//         <ActivityIndicator size="large" color="black" />
//       </View>
//     );
//   }

//   if (status === 'error') {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
//         <Text>{error.message}</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={data.data}
//       renderItem={item => {
//         return (
//           <TouchableOpacity
//             onPress={() =>
//               navigation.navigate('Dynamic', {todoId: item.item.id})
//             }>
//             <View style={{height: 100, borderWidth: 1}}>
//               <Text>{item.item.title}</Text>
//             </View>
//           </TouchableOpacity>
//         );
//       }}
//       keyExtractor={item => item.id}
//     />
//   );
// };

export default TestScreen;
