import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Platform,
  Text,
  KeyboardAvoidingView,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
import { login } from '../redux/store';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';
// import axios from 'axios';
// import {useMutation, useQueries} from 'react-query';
// import {userlogin} from '../utils/api';

// import {useDispatch} from 'react-redux';

//import { SvgUri } from 'react-native-svg';
//import LoginPage from '../../assets/Images/LoginPage.svg'
const SignInScreen = ({ navigation }) => {
  // const dispatch = useDispatch();
  const [data, setData] = React.useState({
    mobile: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });
  // const {mutate, isLoading} = useMutation(userlogin, {
  //   onSuccess: res => {
  //     if (res?.data?.success == true) {
  //       console.log(res);
  //       const user = res.data.data[0];
  //       dispatch(login(user));
  //       setTimeout(() => {
  //         navigation.navigate('Tabs');
  //       }, 100);
  //     } else {
  //       console.log(res);
  //       alert(res?.data?.msg);
  //     }
  //   },
  //   onError: error => {
  //     console.log(error);
  //     Alert.alert('login', error);
  //   },
  // });

  const handlepassword = val => {
    setData({
      ...data,
      password: val,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };


  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="#fff" barStyle="Light-Content" />
        <View style={[styles.header, { flexDirection: 'row' }]}>

          <View>
            <Image
              width="90%"
              height="80%"
              resizeMode="contain"
              style={styles.logoPage}
              source={require('../../assets/icons/anand-logo.png')} />
          </View>



          {/* <View style={{flex: 1}}>
            <Text style={styles.text_header}>Welcome to the world of Contemporary Living</Text>
          </View> */}
          {/* <View style={{flex: 2}}>
            <Image
              width="110%"
              height="90%"
              resizeMode="contain"
              style={styles.logo}
              source={require('../../assets/icons/m_logo2.png')}
            />
          </View> */}
        </View>
        <View style={styles.footer}>
          <View style={styles.action}>
            <TextInput
              placeholder="Mobile No."
              keyboardType="numeric"
              maxLength={10}
              style={styles.textInput}
              onChangeText={val => setData({ ...data, mobile: val })}
            />
            {data.mobile.length == 10 ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={15} />
              </Animatable.View>
            ) : null}
          </View>
          <View style={styles.action}>
            <TextInput
              placeholder="Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              autoCapitalize="none"
              style={[styles.textInput]}
              onChangeText={val => handlepassword(val)}
            />
            <TouchableOpacity
              onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={15} />
              ) : (
                <Feather name="eye" color="grey" size={15} />
              )}
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ color: '#191970' }}>Forgot Password ?</Text>
          </View>

          <View style={styles.button}>
            <LinearGradient
              colors={['#66cdaa', '#3cb371']}
              style={styles.signIn}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('HomeScreen')
                }}>
                <Text style={[styles.textSign, { color: '#fff' }]}>Sign in</Text>
                {/* )}  */}
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={styles.register}>New User? Register Now</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={{
                  backgroundColor: 'black',
                  height: 2,
                  flex: 1,
                  alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  paddingHorizontal: 5,
                  fontSize: 16,
                }}>
                Other Methods
              </Text>
              <View
                style={{
                  backgroundColor: 'black',
                  height: 2,
                  flex: 1,
                  alignSelf: 'center',
                }}
              />
            </View>

            <View style={styles.socialmedia}>
              <TouchableOpacity>
              <Image
                style={{ height: 40, width: 40, }}
                source={require('../../assets/icons/facebook.png')}
              />
              </TouchableOpacity>

              <TouchableOpacity>
              <Image
                style={{ height: 40, width: 40, marginHorizontal:15, }}
                source={require('../../assets/icons/google.png')}
              />
              </TouchableOpacity>

              <TouchableOpacity>
              <Image
                style={{ height: 40, width: 40 }}
                source={require('../../assets/icons/instagram.png')}
              />
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={{height: 100}}>
            <TouchableNativeFeedback
              onPress={() => navigation.navigate('SignUpScreen')}>
              <Image
                style={styles.SignUpRight}
                source={require('../../assets/Images/SignUp.png')}
              />
            </TouchableNativeFeedback>
          </View> */}
        </View>
        <View></View>
      </ScrollView>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // borderRightWidth: 10,
    // borderRightColor: '#ffcc80',
    // borderTopRightRadius: -20,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingBottom:20,
    flexDirection: 'row',
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    // paddingVertical: 10,
  },
  text_header: {
    color: '#000',
    // fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 100,
    fontStyle: "italic"
  },
  text_footer: {
    color: '#05375a',
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#66cdaa',
    marginTop: 10,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -10,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  logo: {

    width: 190,
    height: 190,

    marginTop: 50,
    marginLeft: 30,
  },

  logoPage: {
    flex: 1,
    width: 250,
    height: 250,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,

  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  register: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#191970',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  // SignUpRight: {
  //   height: 100,
  //   width: 40,
  //   position: 'absolute',
  //   right: -30,
  // },

  socialmedia:{
    flexDirection:"row",
    marginVertical:10,
  
  },
});
