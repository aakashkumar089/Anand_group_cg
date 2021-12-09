import React from 'react';
import {
    Button,
    View,
    ScrollView,
    StyleSheet,
    Image,
    StatusBar,
    TouchableOpacity,
    ActivityIndicator,
    Text,
    style,
  } from 'react-native';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import {logout} from '../redux/store';
  import {useNavigation} from '@react-navigation/core';
  import {useQuery} from 'react-query';
  import {useSelector} from 'react-redux';
  import {useDispatch} from 'react-redux';
  import { useIsFocused } from '@react-navigation/native';



  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
  
    return isFocused ? <StatusBar {...props} /> : null;
  }


 export default function Logout  ()  {
      const dispatch = useDispatch();

      return(

        <>
            <FocusAwareStatusBar backgroundColor="#3cb371" barStyle="Light-Content" />

            <View>

            <MaterialCommunityIcons
              style={styles.toggleDrawer}
              name={'backburger'}
              onPress={() => navigation.toggleDrawer('CoustomDrawer')}
              color="black"
              size={20}
            />
                <Text>This will redirected to Sign in Page after DB Connection</Text>
            </View>
            {/* <Button
              title="Logout"
              onPress={() => {
                dispatch(logout());

                setTimeout(() => {
                  navigation.navigate('SignInScreen');
                }, 100);
              }}
            /> */}

        </>
      )
  }



const styles = StyleSheet.create({
  toggleDrawer: {
    alignSelf: 'center',
    paddingRight: 20,
    paddingTop: 10,
    paddingLeft: 5,
  },

})